type Props = {
  children: React.ReactNode;
  styles?: string;
};

export const Container = ({ children, styles }: Props) => {
  return (
    <div
      className={`justify-between py-6 w-full 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:px-10 lg:flex md:px-5 ${
        styles ? styles : ""
      }`}
    >
      {children}
    </div>
  );
};
