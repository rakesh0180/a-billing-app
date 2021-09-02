import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

function ProductContainer() {
  const products = useSelector((state) => state.products);

  return (
    <div className="row">
      <div className="col-md-3">
        <h4 className="text-center">Add new product</h4>
        <AddProduct />
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-6">
        {products.length === 0 ? (
          <div className="text-center">
            <h4>No product's present.</h4>
            <p>Add your first product now.</p>
          </div>
        ) : (
          <ProductList />
        )}
      </div>
    </div>
  );
}

export default ProductContainer;
