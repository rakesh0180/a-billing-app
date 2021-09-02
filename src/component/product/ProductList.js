import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="card card-body  mx-auto mb-5 w-100 h-100">
      <div className="table-responsive-sm shadow p-3 mb-5 bg-white rounded">
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
