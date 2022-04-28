import Image from "next/image";

const FavoriteItem = (props) => {
  const { name, image_url, srm, tagline, abv } = props;
  return (
    <div className="col-12 p-1">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="card bg-light">
            <div className="card-body">
              <div className="d-flex justify-content-between align-content-center">
                <div className="cf-card-info p-1 d-flex flex-column justify-content-between">
                  <div>
                    <h5>{name}</h5>
                    <hr></hr>
                  </div>
                  <span>{tagline}</span>
                  <div>
                    <span>{`ABV ${abv}`}</span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{`$${srm ? srm : "-"}`}</span>
                  </div>
                </div>
                <div className="cf-card-pic p-1 text-center">
                  <Image
                    src={image_url}
                    alt={name}
                    width={50}
                    height={140}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default FavoriteItem;
