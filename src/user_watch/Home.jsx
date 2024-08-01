import { useContext } from "react"
import { mycontext } from "./context"
import "../user_styles/Home.css"
import {BsCart, BsCartFill  } from "react-icons/bs";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";


export default function Home(){

   const {watch,like,setLike,cart,setCart} =useContext(mycontext)

    const addlike=(likeitem)=>{
      if(like.includes(likeitem)){
         setLike(like.filter((watch)=>watch!==likeitem)) 
       }else{
         setLike([...like,likeitem]);
       }
    }
    const addcart=(cartitem)=>{
      if(cart.includes(cartitem)){
        setCart(cart.filter((watch)=>watch!==cartitem)) 
       }else{
        setCart([...cart,cartitem]);
       }
    }
 

     return(
 <div>
  <Navbar />
{/* < Carouseluser/> */}


        < div className="Watchs">
         
         {watch.map((data,index)=>(
            <div className="Watch-list">

                   

                   <h2>{data.Name}</h2>
                   <Link to={`/item/${data.id}`}>
                   < img width="235px" src={data.img} alt="img"></img>
                   </Link>                
                   <h2>Price :  {data.price}</h2>
                   <p>{data.Category}</p>
                  
                   <button onClick={() => addlike(data)}> {" "}  {like.includes(data) ? <FcLike /> : <FcLikePlaceholder />}{" "}</button>
                   <button onClick={()=>addcart(data)}> {" "} {cart.includes(data) ?<BsCartFill />: <BsCart/>}{" "} </button>
             </div>
          ))}
          </div>
          <Footer/>
        </div>
       
     )
}