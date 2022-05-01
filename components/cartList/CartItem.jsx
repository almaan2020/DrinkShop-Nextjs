import Image from "next/image";
import { Button } from "react-bootstrap";

const CartItem = (props) => {
  const { id, name, image_url, srm, handleRemoveCart } = props;
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
                    <h6>{name}</h6>
                    <hr></hr>
                    <h6>{`Cost $${srm ? srm : "-"}`}</h6>
                  </div>
                  <div className="d-inline">
                    <Button
                      variant="outline-danger"
                      onClick={() => handleRemoveCart(id)}
                    >
                      <i className="fa fa-trash-o"></i>
                    </Button>
                  </div>
                </div>
                <div className="cf-card-pic p-1 text-center">
                  {image_url && (
                    <Image
                      src={image_url}
                      alt={name}
                      width={50}
                      height={140}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                    ></Image>
                  )}
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

export default CartItem;
