import FilterTab from "./FilterTab";
import filters from "../../config/filters.json";

const FilterBar = () => {
  const { filtersData } = filters;
  return (
    <ul className="nav nav-tabs">
      {filtersData.map((f) => (
        <FilterTab key={f.id} filter={f.filter} label={f.label} />
      ))}
    </ul>
  );
};

export default FilterBar;
