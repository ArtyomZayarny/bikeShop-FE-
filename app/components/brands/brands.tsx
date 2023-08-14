import { brands } from "@/app/mocksData";
import { Container } from "../container/container";
import { List } from "../list/List";

export const Brands = () => {
  return (
    <section id="brands" className="flex justify-center">
      <Container>
        <List name="brands" items={brands} type="link" />
      </Container>
    </section>
  );
};
