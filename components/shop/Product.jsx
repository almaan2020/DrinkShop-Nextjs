import Image from "next/image";
import { useState } from "react";
import ProductModal from "./ProductModal";
import ViewButton from "../common/ViewButton";
import FavoriteButton from "../common/FavoriteButton";

const Product = (product) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const { id, name, image_url, tagline, abv, srm, description } =
    product.product;
  const productInfo = { id, name, image_url, tagline, abv, srm, description };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-xl-3 d-sm-flex align-items-stretch p-1">
      <div className="card bg-light w-100">
        <div className="card-img-container d-flex justify-content-center align-items-end w-100 ">
          <Image
            className="card-img"
            src={image_url}
            alt={""}
            width={50}
            height={160}
          ></Image>
        </div>
        <div className="card-img-overlay d-flex justify-content-end">
          <div className="d-flex flex-column">
            <ViewButton onView={openModal} iconClass="cardButton fa fa-eye" />
            <ProductModal
              productInfo={productInfo}
              isOpen={isOpen}
              onClose={closeModal}
            />
            <FavoriteButton id={id} />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">{name}</h5>
          <h6 className="card-subtitle mb-2 text-center text-muted">
            {tagline}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Product;
