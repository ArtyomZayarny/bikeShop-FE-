export type ListItem = {
  id: string;
};

export interface LinkItem extends ListItem {
  href: string;
  name: string;
}

export type filterItem = {
  id: string;
  label: string;
};

export interface filterBlock {
  id: string;
  label: string;
  type: string;
  items?: (filerItem | string)[];
  maxPrice?: number;
}

export interface IProduct {
  id: string;
  title: string;
  discount: number;
  imageUrl: string;
  inStock: boolean;
  price: PriceType;
  attributes: filterBlock[];
  href: string;
}

export type PriceType = {
  newPrice: number;
  oldPrice: number;
};
