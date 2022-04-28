import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import sortIcon from "../../config/sortIcon.json";

const SortKey = (props) => {
  const { path } = props;
  const { colorClass, ascClass, descClass } = sortIcon;

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentFood, setCurrentFood] = useState("");
  const [currentSort, setCurrentSort] = useState("name");
  const [currentOrder, setCurrentOrder] = useState("asc");

  useEffect(() => {
    if (!router.isReady) return;
    router.query.page && setCurrentPage(router.query.page);
    router.query.food && setCurrentFood(router.query.food);
    router.query.sort && setCurrentSort(router.query.sort);
    router.query.order && setCurrentOrder(router.query.order);
  }, [router.isReady]);

  const renderSortIcon = () => {
    if (path !== currentSort) return null;
    if (currentOrder === "asc") return ascClass;
    return descClass;
  };

  const raiseSort = (path, sort, order) => {
    if (sort === path) {
      order = order === "asc" ? "desc" : "asc";
    } else {
      sort = path;
      order = "asc";
    }
    window.location.href = `?page=${currentPage}&food=${currentFood}&sort=${sort}&order=${order}`;
  };

  return (
    <span
      onClick={() => raiseSort(path, currentSort, currentOrder)}
      style={{ cursor: "pointer" }}
    >
      {path}&nbsp;
      <i className={`${colorClass} ${renderSortIcon()}`}></i>
      <span>&nbsp;&nbsp;</span>
    </span>
  );
};

export default SortKey;
