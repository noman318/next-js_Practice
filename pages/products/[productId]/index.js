import React from "react";
import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product Details of Product {productId}</h1>
    </div>
  );
}

export default ProductDetails;
