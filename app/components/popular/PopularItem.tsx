import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  popular: { id: string; title: string; href: string; imgUrl: string };
};

export const PopularItem = ({ popular }: Props) => {
  return (
    <Link href={popular.href}>
      <div className="flex flex-col items-center h-full justify-between">
        <div>
          <Image
            className=""
            src={popular.imgUrl}
            alt={popular.title}
            width={110}
            height={76}
          />
        </div>

        <span className="text-sm mt-4">{popular.title}</span>
      </div>
    </Link>
  );
};
