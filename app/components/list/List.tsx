import Link from "next/link";
import { LinkItem } from "../types";
import Image from "next/image";

type Props = {
  name: string;
  items: LinkItem[];
  type?: any;
};

export const List = ({ name, items, type }: Props) => {
  const renderListItem = (item: LinkItem) => {
    switch (type) {
      case "link":
        return (
          <Link href={`./brands/${item.name}`}>
            <Image src={item.href} alt={item.name} width={170} height={120} />
          </Link>
        );
    }
  };
  return (
    <ul id={`${name}-list`} className="flex ">
      {items.map((item) => (
        <li key={item.id} className="flex items-center p-2">
          {renderListItem(item)}
        </li>
      ))}
    </ul>
  );
};
