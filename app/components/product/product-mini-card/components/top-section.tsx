import Image from "next/image";
import styles from "../../styles.module.css";

type Props = {
  discount: number;
};

export const TopSection = ({ discount }: Props) => {
  return (
    <div className="flex justify-between">
      {/* discount */}
      <div>
        <span className={`text-redAccent text-sm font-semibold`}>
          -{discount}%
        </span>
      </div>
      {/* actions buttons */}
      <div className={`${styles.actionsBtn}`}>
        <div className="flex gap-2">
          <Image
            src="./svg/heart.svg"
            alt="like-button"
            width={24}
            height={24}
          />
          <Image
            src="./svg/balance.svg"
            alt="add-to-compare-list"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};
