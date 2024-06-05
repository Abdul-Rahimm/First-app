// بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
export default function ReviewDetail({
  params,
}: {
  params: {
    productID: string;
    reviewID: string;
  };
}) {
  return (
    <>
      <h1> Page for productId {params.productID}</h1>
    </>
  );
}
