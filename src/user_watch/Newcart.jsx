import { useContext } from "react";

import { mycontext } from "./context";

export default function Newcarts({ product }) {
  const { cart, setCart } = useContext(mycontext);

  const handleRemove = (productid) => {
    const updatedCart = cart.filter((item) => item.id !== productid);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productid, newquantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productid ? { ...item, quantity: newquantity } : item
    );
    setCart(updatedCart);
  };

  return (
    <div>
      <border>
        Quantity:{product.quantity || 1}
        <button
          onClick={() =>
            handleQuantityChange(
              product.id,
              Math.max(1, (product.quantity || 1) - 1)
            )
          }
        >
          delete-
        </button>
        <button
          onClick={() =>
            handleQuantityChange(product.id, (product.quantity || 1) + 1)
          }
        >
          {" "}
          Add +
        </button>
        <h5>Total : {(product.price || 0) * (product.quantity || 1)} /-</h5>
        <button onClick={() => handleRemove(product.id)}>remove</button>
      </border>
    </div>
  );
}
