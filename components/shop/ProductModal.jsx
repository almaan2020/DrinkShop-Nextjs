import Image from "next/image";
import { Modal, Button } from "react-bootstrap";
import CollapseText from "../common/CollapseText";
import CartButton from "../common/CartButton";

const ProductModal = (props) => {
  const { productInfo, isOpen, onClose } = props;
  const { id, name, image_url, tagline, abv, srm, description } = productInfo;

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-around align-content-center">
          <div className="product-modal-info p-1 d-flex flex-column justify-content-between">
            <div>
              <h5>{tagline}</h5>
              <h6>{`ABV ${abv}`}</h6>
              <hr></hr>
            </div>
            <CollapseText text={description} />
            <div>
              <hr></hr>
              <h5>{`Cost $${srm ? srm : "-"}`}</h5>
            </div>
          </div>
          <div className="product-modal-pic p-1 text-center">
            {image_url && (
              <Image
                src={image_url}
                alt={name}
                width={100}
                height={300}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
              ></Image>
            )}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <CartButton id={id} />
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
