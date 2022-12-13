import { useRouter } from 'next/router';
import * as React from 'react';

export interface ReviewPageProps {}

export default function ReviewPage(props: ReviewPageProps) {
    const router = useRouter();

    return <h1>There are all reviews for product {router.query.productId}</h1>;
}
