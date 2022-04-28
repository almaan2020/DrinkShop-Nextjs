import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import filters from "../../config/filters.json";

const FilterTab = (props) => {
  const { filter, label } = props;

  const router = useRouter();
  const [currentFood, setCurrentFood] = useState("");
  const [currentSort, setCurrentSort] = useState("name");
  const [currentOrder, setCurrentOrder] = useState("asc");

  useEffect(() => {
    if (!router.isReady) return;
    router.query.food && setCurrentFood(router.query.food);
    router.query.sort && setCurrentSort(router.query.sort);
    router.query.order && setCurrentOrder(router.query.order);
  }, [router.isReady]);

  const { colors } = filters;
  const getStyleClass = (filter) => {
    return currentFood === filter
      ? `nav-link active ${colors.activeColorClass}`
      : `nav-link ${colors.colorClass}`;
  };

  return (
    <li
      className="nav-item"
      onClick={() =>
        (window.location.href = `?page=1&food=${filter}&sort=${currentSort}&order=${currentOrder}`)
      }
    >
      <Link href="#">
        <a className={getStyleClass(filter)}> {label} </a>
      </Link>
    </li>
  );
};

export default FilterTab;
