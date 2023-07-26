import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initCartItems = [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initCartItems);

  return (
    <>
      <div className="container">
        <h3>Cart App</h3>
        <CatalogView />
        <div className="my-4 w-50">
          <CartView items={cartItems} />
        </div>
      </div>
    </>
  );
};
