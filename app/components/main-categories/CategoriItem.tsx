import Image from "next/image";
import Link from "next/link";

type Props = {
  imageUrl: string;
};
export const CategoryItem = ({ imageUrl }: Props) => {
  return (
    <Link href="#">
      <Image src={imageUrl} alt="details" width={480} height={480} />
    </Link>
  );
};
