import Image from "next/image";

type Props = {
  imageUrl: string;
};

export const Preview = ({ imageUrl }: Props) => {
  return (
    <div className="flex justify-center">
      <Image src={imageUrl} alt="trek" width={200} height={107} />
    </div>
  );
};
