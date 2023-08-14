"use client";
import Image from "next/image";
import { Title } from "../../common/title";
import { filterBlock, filterItem } from "../../types";
import styles from "../styles.module.css";
import { useState } from "react";
import { RangeSlider } from "../range-slider";
import { ColorList } from "../color-list";

type Props = {
  filterData: filterBlock;
};
export const FilterBlock = ({ filterData }: Props) => {
  const [showFilterList, setShowFilterList] = useState(true);

  const renderFilterContent = (type: string) => {
    switch (type) {
      case "list":
        return (
          <>
            {showFilterList && filterData.items && (
              <ul>
                {filterData.items.map((item) => (
                  <li
                    key={item.id}
                    className={`${styles.checkbox} relative flex mb-2 items-center cursor-pointer`}
                  >
                    <span className="text-xs font-normal text-color flex pl-5">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </>
        );
      case "price":
        return <>{showFilterList && <RangeSlider maxPrice={20000} />}</>;

      case "color":
        return (
          <>{showFilterList && <ColorList colors={filterData.items!} />}</>
        );
    }
  };
  return (
    <div className="text-sm mb-6">
      {/* Filter title */}
      <div
        onClick={() => setShowFilterList(!showFilterList)}
        className="flex justify-between cursor-pointer mb-4"
      >
        <Title type={6} styles="text-sm font-medium">
          {filterData.label}
        </Title>
        <Image
          src="./svg/filter-arrow.svg"
          alt="arrow"
          width={16}
          height={16}
          className={`${!showFilterList ? "rotate-180" : null}`}
        />
      </div>
      {renderFilterContent(filterData.type)}
    </div>
  );
};
