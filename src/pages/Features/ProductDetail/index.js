import React from 'react'
import {useParams} from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <div className="product-detail-page">
      <h2>This is Product Detail {productId} Page</h2>
    </div>
  )
}

export default ProductDetail;
