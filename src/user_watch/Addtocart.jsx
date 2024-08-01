import { useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { mycontext } from "./context";
import { BsCartCheckFill } from "react-icons/bs";
import Newcart from "./Newcart";
import "../user_styles/Signup.css";
import Cartnavbar from "./cartnavbar";

export default function Addtocart() {
  const { cart, setCart } = useContext(mycontext);
  const [cartTotal, setCartTotal] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    const calculateCartTotal = () => {
      return cart.reduce((total, item) => {
        const quantity = item.quantity || 1;
        const price = item.price || 0;
        return total + price * quantity;
      }, 0);
    };
    setCartTotal(calculateCartTotal());
  }, [cart]);

  function uncartbtn(data) {
    setCart(cart.filter((watch) => watch !== data));
  }

  function Placeorder() {
    alert("please login account !!!");
    nav("/Userlogin");
  }

  return (
    <div>
      <Cartnavbar />
      <h1>Add to cart</h1>

      <div className="watch">
        {cart.map((data, index) => (
          <div className="Watch-list">
            <img width="300px" src={data.img} alt="img"></img>

            <p>{data.Name}</p>
            <p>{data.Category}</p>
            <p>{data.Disc}</p>

            <h2>Price : {data.price}</h2>
            <div key={data.id}>
              <Newcart product={data} />
            </div>
            <button onClick={() => uncartbtn(data)}>
              <BsCartCheckFill />{" "}
            </button>
          </div>
        ))}
        <div>
          <h3> total :  ₹ {cartTotal.toFixed(2)}/-</h3>
        </div>
        <div className="order">
          <button className="place" onClick={Placeorder}>
            {" "}
            Place Order{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
