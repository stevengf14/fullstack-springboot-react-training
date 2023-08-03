import PropTypes from "prop-types";
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView";
import { CatalogView } from "../components/CatalogView";

export const CartRoutes = ({
  cartItems,
  handlerAddProductCart,
  handlerDeleteProductCart,
}) => {
  return (
    <Routes>
      <Route
        path="catalog"
        element={<CatalogView handler={handlerAddProductCart} />}
      />
      <Route
        path="cart"
        element={
          cartItems?.length > 0 ? (
            <div className="my-4 w-50">
              <CartView
                items={cartItems}
                handlerDelete={handlerDeleteProductCart}
              />
            </div>
          ) : (
            <div className="alert alert-warning">
              There is no products in the shopping cart!
            </div>
          )
        }
      />
      <Route path="/" element={<Navigate to={"/catalog"} />} />
    </Routes>
  );
};
CartRoutes.propTypes = {
  cartItems: PropTypes.array.isRequired,
  handlerAddProductCart: PropTypes.func.isRequired,
  handlerDeleteProductCart: PropTypes.func.isRequired,
};
