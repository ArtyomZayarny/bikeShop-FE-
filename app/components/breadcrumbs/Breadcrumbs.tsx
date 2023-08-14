import Link from "next/link";
import { breadCrumbsLink } from "./mock";
import Image from "next/image";

export const Breadcrumbs = () => {
  const lastIndex = breadCrumbsLink.length - 1;
  return (
    <section id="breadcrumbs" className="mb-8">
      <ul className="flex">
        {breadCrumbsLink.map((item, index) => (
          <li key={item.id} className="flex">
            <Link href={item.href} className="text-xs text-color">
              {item.label}
            </Link>
            {index !== lastIndex && (
              <Image
                className="mx-1"
                src={"./svg/breadcrumbs-arrow.svg"}
                alt="arrow"
                width={5}
                height={8}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
