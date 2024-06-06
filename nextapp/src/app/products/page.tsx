import Link from "next/link";

export default function ProductList() {
  const productID = 100;

  return (
    <>
      <Link href={"/"}>
        <h2>Home </h2>
      </Link>
      <h1>Product List</h1>
      <h2>
        <Link href={"/products/1"} replace>
          Product 1
        </Link>
      </h2>
      <h2>
        <Link href={`/products/${productID}`}>Product {productID}</Link>
      </h2>
    </>
  );
}
