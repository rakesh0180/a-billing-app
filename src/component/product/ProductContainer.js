import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";

function ProductContainer() {
  const products = useSelector((state) => state.products);

  return (
    <div className="row mt-5">
      {products.length <= 0 ? (
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div className="card card-body  mx-auto mb-5 w-75 h-75">
            <div className="text-center">
              <h3 className="mt-4 fw-bold mb-3">No Product found</h3>
              <p className="mt-4 fw-bold mb-3">add your first Product</p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" col col-12  col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <ProductList />
        </div>
      )}

      <AddProduct />
    </div>
  );
}

export default ProductContainer;
