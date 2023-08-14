import styles from "../styles.module.css";

type Props = {
  title: string;
};

export const QuickFilterBtn = ({ title }: Props) => {
  return (
    <button className={`${styles.quickFilterBtn} px-4 py-3`}>
      <span className="text-color text-sm">{title}</span>
    </button>
  );
};
