import React, { Component } from "react";
import ProductCard from './ProductCard';
class ProductGrid extends Component {
  render() {
    return (
      <div className="product-grid">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    )
  }
}
export default ProductGrid;
