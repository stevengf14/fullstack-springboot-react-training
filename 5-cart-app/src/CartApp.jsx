import { useReducer, useEffect } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { itemsReducer } from "./reducer/itemsReducer";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  UPDATE_QUANTITY_PRODUCT_CART,
} from "./reducer/itemsActions";

const initCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, dispatch] = useReducer(itemsReducer, initCartItems);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((item) => item.product.id === product.id);
    if (hasItem) {
      dispatch({
        type: UPDATE_QUANTITY_PRODUCT_CART,
        payload: product,
      });
    } else {
      dispatch({
        type: ADD_PRODUCT_CART,
        payload: product,
      });
    }
  };

  const handlerDeleteProductCart = (id) => {
    dispatch({
      type: DELETE_PRODUCT_CART,
      payload: id,
    });
  };

  return (
    <>
      <div className="container my-4">
        <h3>Cart App</h3>
        <CatalogView handler={handlerAddProductCart} />
        {cartItems?.length > 0 && (
          <div className="my-4 w-50">
            <CartView
              items={cartItems}
              handlerDelete={handlerDeleteProductCart}
            />
          </div>
        )}
      </div>
    </>
  );
};
