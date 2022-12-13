import { useRouter } from 'next/router';
import * as React from 'react';

export interface ReviewDetailsPageProps {}

export default function ReviewDetailsPage(props: ReviewDetailsPageProps) {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
}
