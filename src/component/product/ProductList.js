import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetAllProducts } from "../../action/ProductAction";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => {
    return state.products;
  });
  const [filterProducts, setFilterProducts] = useState([]);
  console.log("filterProducts", filterProducts);

  // eslint-disable-next-line array-callback-return
  const filter = products.filter((product) => {
    if (product.name.length > 1) return product;
  });
  setFilterProducts(filter);
  console.log("filterProducts", filterProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startGetAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <div className="card card-body  mx-auto  w-100 h-100">
      <div className="table-responsive-sm shadow p-3  bg-white rounded">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                //index is start from zero so 0+1 =1
                <ProductItem
                  key={product._id}
                  index={i + 1}
                  product={product}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
