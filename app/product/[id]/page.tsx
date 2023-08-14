type Props = {
  params: {
    id: string;
  };
};

export default function ProductDetailPage({ params: { id } }: Props) {
  return <div>Product detrail page id #{id}</div>;
}
