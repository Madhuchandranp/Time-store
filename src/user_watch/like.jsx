import { useContext, useEffect, useState } from "react";
import { mycontext } from "./context";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Navbar } from "react-bootstrap";
import {BsCart, BsCartFill  } from "react-icons/bs";


export default function Like() {
  const { like, setLike } = useContext(mycontext);
  const { cart, setCart } = useContext(mycontext);

  function unlikeBtn(data) {
    setLike(like.filter((watch) => watch !== data));
  }
  function uncartbtn(data) {
    setCart(cart.filter((watch) => watch !== data));
  }

  const addcart=(cartitem)=>{
    if(cart.includes(cartitem)){
      setCart(cart.filter((watch)=>watch!==cartitem)) 
     }else{
      setCart([...cart,cartitem]);
     }
  }
  return (
    <div>
      <Navbar />
      <h1>liked items</h1>

      <div className="watch">
        {like.map((data, index) => (
          <div className="Watch-list">
          
            <img width="300px" src={data.img} alt="img"></img>

            <p>{data.Name}</p>
            <p>{data.Category}</p>
            <p>{data.Disc}</p>

            <h2>Price : {data.price}</h2>
            <button onClick={() => unlikeBtn(data)}>
            {like.includes(data) ? <FcLike /> : <FcLikePlaceholder />}{" "}
            </button>
            <button onClick={()=>addcart(data)}> {" "} {cart.includes(data) ?<BsCartFill />: <BsCart/>}{" "} </button>
      
          </div>
        ))}
      </div>
    </div>
  );
}
