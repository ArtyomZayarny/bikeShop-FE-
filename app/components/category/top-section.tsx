import { Title } from "../common/title";
import { QuickFilterBtn } from "../filter/quick-filter-btn";

export const TopSection = () => {
  return (
    <div
      id="title-categories"
      className="flex justify-between items-center mb-6"
    >
      <Title type={2} styles="text-3xl">
        Гірські велосипеди
      </Title>

      <div className="flex gap-2">
        <QuickFilterBtn title={"За популярністю"} />
        <QuickFilterBtn title={"Спочатку дешеві"} />
        <QuickFilterBtn title={"За назвою"} />
      </div>
    </div>
  );
};
