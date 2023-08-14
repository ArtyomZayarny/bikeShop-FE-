type Props = {
  inStock: boolean;
};
export const StockStatus = ({ inStock }: Props) => {
  return (
    <div>
      <span
        className={`text-sm font-normal text-${inStock ? "green" : "disabled"}`}
      >
        {inStock ? "В наявності" : "Немає в наявності"}
      </span>
    </div>
  );
};
