import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-center">Hello Abdul Rahim to NextJS</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>
        <h1>Products</h1>
      </Link>
    </>
  );
}
