import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();
  const handleClickEvent = () => {
    console.log("cliked");
    router.push("/products");
  };
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">product</Link>
      <button onClick={handleClickEvent}>Place Order</button>
    </div>
  );
}
