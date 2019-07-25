import React, { Component } from "react";
class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <div className="product-card__img">
          <a href="#" title="asda">
            <img src="https://loremflickr.com/320/240/" alt="asd" />
          </a>
          <div className="add-to-cart"></div>
          <div className="icon"></div>
        </div>
        <div className="product-card__content">
          <div className="product-info">asdasd</div>
          <div className="product-price">
            <p className="available-price">123</p>
            <p className="disable-price">321</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ProductCard;
