import { useRouter } from 'next/router';
import * as React from 'react';

export interface ProductDetailProps {}

export default function ProductDetail(props: ProductDetailProps) {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Products Detail Page</h1>
      <p>Product: {productId}</p>
    </div>
  );
}
