import Link from "next/link";
import React from "react";

function ProductList({ productId = 22 }) {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>Products 1</h1>
      <h1>Products 2</h1>
      <Link href={"/products/3"} replace>
        <h1>Products 3</h1>
      </Link>
      <Link href={`/products/${productId}`}>
        <h2>Products {productId}</h2>
      </Link>
    </div>
  );
}

export default ProductList;
