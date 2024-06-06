"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Order() {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleClick = () => {
    console.log("Placing your order");
    alert("order placed successfully");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Order</button>
    </>
  );
}
