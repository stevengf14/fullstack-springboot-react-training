import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";

export const CartApp = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <div className="row">
          {products.map((product) => (
            <div className="col-4 my-2" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-primary">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-4 w-50">
          <h3>Shopping Cart</h3>
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>price</td>
                <td>quantity</td>
                <td>total</td>
                <td>delete</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-end fw-bold">
                  Total
                </td>
                <td colSpan={2} className="text-end fw-bold">
                  12345
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
