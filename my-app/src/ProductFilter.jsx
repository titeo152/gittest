import React, { Component } from "react";
import ProductSelectFilter from './ProductSelectFilter';
import ProductGrid from './ProductGrid';
class ProductFilter extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-12">
          <div className="product-page-description">
            <p>
              asdasdasdsa
            </p>
          </div>
          <ProductSelectFilter></ProductSelectFilter>
          <ProductGrid></ProductGrid>
        </div>
      </div>
    )
  }
}
export default ProductFilter;
