import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">product</Link>
    </div>
  );
}
