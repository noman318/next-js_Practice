import React from "react";
import { useRouter } from "next/router";

function ProductReview() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  console.log("reviewId", reviewId);
  return (
    <div>
      <h1>
        Review no. {reviewId} for Product {productId}
      </h1>
    </div>
  );
}

export default ProductReview;
