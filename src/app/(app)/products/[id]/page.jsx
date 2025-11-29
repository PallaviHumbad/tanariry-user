// src/app/(app)/products/[id]/page.jsx

import ProductDetailPage from './ProductDetailPage';
import { notFound } from 'next/navigation';
import { fetchProduct } from '@/lib/api';

export default async function ProductPage({ params }) {
 
  const { id } = await params;           

  if (!id || id === 'undefined') {
    console.error('Missing product ID in URL');
    notFound();
  }

  try {
    const product = await fetchProduct(id);

    if (!product?._id) {
      console.error('Product not found in DB');
      notFound();
    }

    return <ProductDetailPage product={product} />;
  } catch (error) {
    console.error('Product fetch error:', error.message);
    notFound();
  }
}