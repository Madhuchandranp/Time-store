// import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { mycontext } from "./context";
// import "../user_styles/page.css";
// import { FcLikePlaceholder, FcLike } from "react-icons/fc";

// export default function Showpage() {
//   const { id } = useParams();
//   const { watch } = useContext(mycontext);

//   const Product = watch.find((Product) => Product.id === parseInt(id));

//   const { like, setLike } = useContext(mycontext);

//   const addlike = (cart) => {
//     if (like.includes(cart)) {
//       setLike(like.filter((watch) => watch !== cart));
//     } else {
//       setLike([...like, cart]);
//     }
//   };

//   return (
//     <div className="sh1">
//       <center>
//         <h1>{Product.Name}</h1>
//       </center>
//       <img width="250px" src={Product.img} alt="img" />
//       <p>{Product.Disc}</p>
//       <span>special offer</span>
//       <h2>Price : {Product.price}</h2>
//       <p>Type : {Product.Type}</p>

//       <button onClick={() => addlike(Product)}>
//         {" "}
//         {like.includes(Product) ? <FcLike /> : <FcLikePlaceholder />}{" "}
//       </button>
//     </div>
//   );
// }
