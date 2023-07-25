export const CartApp = () => {
  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <div className="row">
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Mechanical Keyboard RGB</h5>
                <p className="card-text">
                  Mechanical keyboard with RGB lights switches cherry network
                </p>
                <p className="card-text">$ 120</p>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Samsung Smart TV 55</h5>
                <p className="card-text">
                  Mechanical keyboard with RGB lights switches cherry network
                </p>
                <p className="card-text">$ 1200</p>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Corsair Memmory 8GB DDR5</h5>
                <p className="card-text">
                  Mechanical keyboard with RGB lights switches cherry network
                </p>
                <p className="card-text">$ 300</p>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Asus Nvidia RTC</h5>
                <p className="card-text">
                  Mechanical keyboard with RGB lights switches cherry network
                </p>
                <p className="card-text">$ 750</p>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">CPU Intel Core i5</h5>
                <p className="card-text">
                  Mechanical keyboard with RGB lights switches cherry network
                </p>
                <p className="card-text">$ 600</p>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
          <div className="col-4 my-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Headphones bluetooth Sony</h5>
                <p className="card-text">
                  Mechanical keyboard with RGB lights switches cherry network
                </p>
                <p className="card-text">$ 240</p>
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
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
