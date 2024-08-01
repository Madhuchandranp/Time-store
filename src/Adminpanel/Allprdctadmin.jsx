import { mycontext } from "../user_watch/context";
import { useState, useContext } from "react";
import "../user_styles/allproduct.css";

export default function Allprdctadmin() {
  const { watch } = useContext(mycontext);

  const [watchs] = useState(watch);

  return (
    <div>
      <h2>view all product</h2>
      <ul>
        {watch.map((product, index) => (
          <li key={index}>
           <div className="photo"><img className="imge" src={product.img} alt="pic" /></div>
            {product.Name}-${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
