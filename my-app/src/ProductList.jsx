import React, { Component } from "react";
import ProductFilter from './ProductFilter';
import {Parallax} from 'react-parallax';
class ProductList extends Component {
  render() {
    return (
      <div>
        <div className="curve-banner">
          <Parallax bgImage="https://loremflickr.com/320/240/dog" strength={200}>
            <div className="container">
              <div className="col-12">
                <div className="parallax-banner">
                  <div className="parallax-content">
                    <div className="banner-title">
                      <h1>ChiVas</h1>
                    </div>
                    <div className="banner-description">
                      <h2>asdcasdcasdc</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <ProductFilter></ProductFilter>
        </div>
      </div>
    )
  }
}
export default ProductList;
