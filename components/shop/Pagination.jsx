import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { range } from "lodash";
import paginations from "../../config/pagination.json";

const Pagination = () => {
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

  const { countPerPage, allCount } = paginations;
  const itemCounts = currentFood ? countPerPage : allCount;
  const pageCount = Math.ceil(itemCounts / countPerPage);

  if (pageCount === 1) return null;
  const pages = range(1, pageCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === Number(currentPage) ? "page-item active" : "page-item"
            }
          >
            <button
              className="page-link"
              onClick={() =>
                (window.location.href = `?page=${page}&food=${currentFood}&sort=${currentSort}&order=${currentOrder}`)
              }
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
