import SortKey from "./SortKey";
import sortIcon from "../../config/sortIcon.json";

const SortBar = () => {
  const { path } = sortIcon;
  return (
    <div className="d-flex align-items-center text-secondary">
      {path.map((path) => (
        <SortKey key={path.id} path={path.value} />
      ))}
    </div>
  );
};

export default SortBar;
