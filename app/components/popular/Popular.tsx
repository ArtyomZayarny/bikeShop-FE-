import React from "react";
import { PopularItem } from "./PopularItem";
import styles from "./styles.module.css";
import { Title } from "../common/title";

export const Popular = () => {
  const popularList = [
    {
      id: "1",
      href: "/girski",
      imgUrl:
        "https://jollyride.com.ua/content/images/7/110x76l80nn0/14112104680058.webp",
      title: "Гірскі",
    },
    {
      id: "2",
      href: "/dityachi",
      imgUrl:
        "https://jollyride.com.ua/content/images/14/110x77l80nn0/66967830300120.webp",
      title: "Дитячі",
    },
    {
      id: "3",
      href: "/likhtari",
      imgUrl:
        "https://jollyride.com.ua/content/images/19/110x79l80nn0/74418551117033.webp",
      title: "Освітлення",
    },
    {
      id: "4",
      href: "/kolisni-chastini",
      imgUrl:
        "https://jollyride.com.ua/content/images/29/110x110l80nn0/57408696177187.webp",
      title: "Колісні частини",
    },
    {
      id: "5",
      href: "/gripsi",
      imgUrl:
        "https://jollyride.com.ua/content/images/4/110x99l80nn0/64738029017767.webp",
      title: "Гріпси",
    },
    {
      id: "6",
      href: "/sidla-velosipedni",
      imgUrl:
        "https://jollyride.com.ua/content/images/7/110x65l80nn0/18678084385902.webp",
      title: "Сідла",
    },
    {
      id: "7",
      href: "/sholomi",
      imgUrl:
        "https://jollyride.com.ua/content/images/40/110x109l80nn0/71299022909962.webp",
      title: "Шоломи",
    },
    {
      id: "8",
      href: "/okulyari",
      imgUrl:
        "https://jollyride.com.ua/content/images/42/110x88l80nn0/14683415979985.webp",
      title: "Окуляри",
    },
    {
      id: "9",
      href: "/termobilyzna",
      imgUrl:
        "https://jollyride.com.ua/content/images/21/94x110l80nn0/53088095696633.webp",
      title: "Термобілизна",
    },
  ];

  return (
    <section id="popular" className="py-10 flex justify-center">
      <div className="flex-col justify-between py-6 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:px-10 md:px-5 lg:flex items-center">
        <Title type={3} styles={"text-2xl text-center font-bold mb-5"}>
          Популярні категорії
        </Title>
        <ul className="justify-between items-stretch py-6 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl md:px-5 lg:flex">
          {popularList.map((popular) => (
            <li key={popular.id}>
              <PopularItem popular={popular} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
