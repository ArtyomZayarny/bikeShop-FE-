import { filterBlock } from "../../types";

export const filterData: filterBlock[] = [
  {
    id: "price",
    label: "Ціна",
    type: "price",
    maxPrice: 56832,
  },
  {
    id: "brands",
    type: "list",
    label: "Бренд",
    items: [
      {
        id: "leon",
        label: "Leon",
      },
      {
        id: "cyclone",
        label: "Cyclone",
      },
      {
        id: "formula",
        label: "Formula",
      },
      {
        id: "winner",
        label: "Winner",
      },
      {
        id: "kands",
        label: "Kands",
      },
      {
        id: "merida",
        label: "Merida",
      },
      {
        id: "trek",
        label: "Trek",
      },
      {
        id: "cannondale",
        label: "Cannondale",
      },
    ],
  },
  {
    id: "bikes",
    type: "list",
    label: "Тип велосипеда",

    items: [
      {
        id: "1",
        label: "Гірскі",
      },
      {
        id: "2",
        label: "Гравійні",
      },
      {
        id: "3",
        label: "Шосейні",
      },
      {
        id: "4",
        label: "Турінгові",
      },
      {
        id: "5",
        label: "Міські",
      },
      {
        id: "6",
        label: "Складні",
      },
      {
        id: "7",
        label: "Підліткові",
      },
      {
        id: "8",
        label: "Дитячі",
      },
      {
        id: "9",
        label: "Біговели",
      },
      {
        id: "10",
        label: "Жіночі",
      },
      {
        id: "11",
        label: "BMX",
      },
      {
        id: "12",
        label: "Електричні",
      },
    ],
  },
  {
    id: "color",
    type: "color",
    label: "Колори",
    items: [
      "#ff0000",
      "#ff94b2",
      "#000000",
      "#0033ff",
      "#ffaa00",
      "#DBDCDD",
      "#ffff00",
      "#00ff00",
      "#A1A1A5",
      "#f200ff",
      "#f5a496",
      "#f0edf0",
      "#b05b2e",
      "#00ccff",
    ],
  },
];
