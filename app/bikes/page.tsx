import { Breadcrumbs } from "../components/breadcrumbs";
import { CategoryContent } from "../components/category";

export default function Category() {
  return (
    <>
      {/* Breadcrumbs section */}
      <Breadcrumbs />

      {/* Category page content (filter and listing) */}
      <CategoryContent />
    </>
  );
}
