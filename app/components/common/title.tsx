import React from "react";

type Props = {
  children: React.ReactNode;
  styles?: string;
  type: number;
};

export const Title = ({ children, styles, type }: Props) => {
  const renderHeading = (type: number) => {
    switch (type) {
      case 1:
        return <h1 className={styles}>{children}</h1>;
      case 2:
        return <h2 className={styles}>{children}</h2>;
      case 3:
        return <h3 className={styles}>{children}</h3>;
      case 4:
        return <h4 className={styles}>{children}</h4>;
      case 5:
        return <h5 className={styles}>{children}</h5>;
      case 6:
        return <h6 className={styles}>{children}</h6>;
    }
  };

  return renderHeading(type);
};
