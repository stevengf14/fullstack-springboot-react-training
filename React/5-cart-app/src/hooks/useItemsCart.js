const initCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
import { useReducer, useEffect } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  ADD_PRODUCT_CART,
  DELETE_PRODUCT_CART,
  UPDATE_QUANTITY_PRODUCT_CART,
} from "../reducer/itemsActions";

export const useItemsCart = () => {
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

  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  };
};
