import { Container } from "../container/container";
import { CategoryItem } from "./CategoriItem";

export const MainCategories = () => {
  const categories = [
    {
      title: "bikes",
    },
    {
      title: "accessories",
    },
    {
      title: "details",
    },
  ];

  return (
    <section id="main-categories" className="flex justify-center">
      <Container>
        <div className="flex flex-col gap-y-2 justify-between w-full min-[480px]:items-center sm:flex-row sm:gap-2 lg:flex-row">
          {categories.map((cat) => (
            <CategoryItem
              key={cat.title}
              imageUrl={`./images/${cat.title}.webp`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
