import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { orderBy } from "lodash";
import { useProductContext } from "../../contexts/ProductProvider";
import Product from "./Product";

const ProductList = () => {
  const { products } = useProductContext(); // ProductContext object.

  const router = useRouter();
  const [currentSort, setCurrentSort] = useState("name");
  const [currentOrder, setCurrentOrder] = useState("asc");

  useEffect(() => {
    if (!router.isReady) return;
    setCurrentSort(router.query.sort);
    setCurrentOrder(router.query.order);
  }, [router.isReady]);

  const getSorted = () => {
    const sorted = orderBy(products, currentSort, currentOrder);
    return sorted;
  };
  return (
    <div className="row">
      {getSorted().map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
