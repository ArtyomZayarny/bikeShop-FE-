"use client";
import Image from "next/image";
import { Title } from "../../common/title";
import { Button } from "../../common/button";
import { ColorList } from "../../filter/color-list";
import { filterData } from "../../filter/mocks";
import styles from "../styles.module.css";
import { DropDown } from "../../common/dropdown";
import { useState } from "react";
import { TopSection } from "./components/top-section";
import { IProduct } from "../../types";
import { Preview } from "./components/preview";
import { StockStatus } from "./components/stock-status";
import { Price } from "./components/price";
import { AttributeItem } from "./components/attributeItem";
import { products } from "../../category/mocks";
import Link from "next/link";

type Props = {
  product: IProduct;
};

export const ProductMiniCard = ({ product }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className={`bg-gr rounded-lg ${isHover ? styles.hover : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="p-8">
        {/* Top section  */}
        <TopSection discount={product.discount} />

        {/* image  */}
        <Link href={product.href}>
          <Preview imageUrl={product.imageUrl} />
        </Link>

        {/* title */}
        <Title type={5} styles="text-sm font-medium mb-2">
          {product.title}
        </Title>

        {/* status not in stock */}
        <StockStatus inStock={product.inStock} />

        {/* price and buy button */}
        <div className="flex justify-between items-end mb-2">
          <Price price={product.price} />

          {/* button */}
          <Button
            styles={`px-3 py-2 rounded shadow bg-[#FFF] flex ${styles.buyBtn}`}
            title={"Купити"}
            textStyle="font-medium text-xs text-redAccent uppercase"
          />
        </div>

        {/* Product attribute list */}
        {/* Color picker*/}
        <div className={`${styles.attrList}`}>
          {/* Attribute item */}
          {/* TODO: Create attrbuiteItem component */}
          <ul>
            {product.attributes.map((attr) => (
              <AttributeItem key={attr.id} attr={attr} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
