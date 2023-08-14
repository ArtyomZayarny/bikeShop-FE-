type Props = {
  title: string;
  styles?: string;
  textStyle?: string;
};

export const Button = ({ title, styles, textStyle }: Props) => {
  return (
    <button className={`${styles}`}>
      <span className={`${textStyle}`}>{title}</span>
    </button>
  );
};
