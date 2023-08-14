import { PriceType } from "@/app/components/types";

type Props = {
  price: PriceType;
};

export const Price = ({ price }: Props) => {
  return (
    <div>
      {/* price */}
      <span className="text-xs text-regular font-semibold">
        {price.newPrice} грн
      </span>
      {/* old price */}
      <span className="text-xs ml-2 text-disabled line-through">
        {price.oldPrice} грн
      </span>
    </div>
  );
};
