import { FilterBlock } from "./filter-block";
import { filterData } from "./mocks";

export const Filter = () => {
  return (
    <div className="bg-gr p-10 rounded-lg">
      {filterData.map((filter) => (
        <FilterBlock key={filter.id} filterData={filter} />
      ))}
    </div>
  );
};
