import { useEffect } from "react";
import { getProducts } from "../services/productService";
import { useFavContext } from "../contexts/FavoriteProvider";
import { useCartContext } from "../contexts/CartProvider";
import ProductList from '../components/shop/ProductList';
import Pagination from "../components/shop/Pagination";
import FilterBar from "../components/shop/FilterBar";
import SortBar from "../components/shop/SortBar";
import PageTitle from "../components/layouts/PageTitle";
import titles from "../config/titles.json";

export default function Home({ products }) {
  const { fillFavIds } = useFavContext();
  const { fillCartIds } = useCartContext();
  const { emptyMsg } = titles.shopTitles;

  useEffect(() => {
    fillFavIds();
  }, [fillFavIds]);

  useEffect(() => {
    fillCartIds();
  }, [fillCartIds]);

  if (products.length === 0)
    return (
      <div className="row d-block text-center">
        <p>{emptyMsg}</p>
      </div>
    );

  return (
    <div className="row pt-4 d-block">
      <PageTitle title="Our Beers" />
      <div className="row mt-4 ">
        <div className="col-md-2"></div>
        <div className="d-flex col-md-8 p-2 bg-light justify-content-around">
          <FilterBar />
          <SortBar />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <ProductList />
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row my-2">
        <div className="col-md-2"></div>
        <div className="d-flex col-md-8 p-2 justify-content-center">
          <Pagination />
        </div>
        <div className="col-md-2">
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { data } = await getProducts(query.page, query.food);
  const products = data;
  return {
    props: {
      products
    },
  }
}