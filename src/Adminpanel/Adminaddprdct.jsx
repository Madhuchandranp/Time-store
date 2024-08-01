import "../user_styles/Adminaddprdct.css";

import { mycontext } from "../user_watch/context";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

export default function Allprdctadmin() {
  const { watch, setWatch } = useContext(mycontext);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState("");
  

  const Addproduct = (index) => {
    if (!productName || !productPrice || !image) {
      alert("please fill in all fields");
      return;
    }
    const newwatch = {
      name: productName,
      price: parseFloat(productPrice),
      img: image,
    };
    setWatch([...watch, newwatch]);
    setProductName("");
    setProductPrice("");
    setImage("");
  };
  const removeProduct = (index) => {
    const updateProducts = [...watch];
    updateProducts.splice(index, 1);
    setWatch(updateProducts);
  };
  console.log("w", watch);

  const handleSave = (index) => {
    const updatedwatch = [...watch, watch];
    updatedwatch[index] = {
      ...updatedwatch[index],
      Name: productName,
      price: productPrice,
      img: image,
    };
    setWatch(updatedwatch);
  };
  const handleEditImg = (e) => {
    setImage(e.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="more">
          <button>
            <Link to={"/"} className="link"> HOME </Link>
          </button>
        </div>
      </div>
      <table className="addpro">
        <tr>
        <h2><u>Add product</u></h2>
        <label>
          product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>
        <br />
        <label>
          product Price:
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>
        <br />
        <label>
          product image:
          <input type="text" value={image} onChange={handleEditImg} />
        </label>
        <br />
        <br/>
        <button onClick={Addproduct}>Add product</button>

        </tr>
      </table>
      <table>
        <tr>
          <h2>product list</h2>
          <ul>
            {watch.map((product, index) => (
              <li key={index}>
                <th>
                  {" "}
                  <img className="imge" src={product.img} alt="img" />
                </th>
                <th>
                  {" "}
                  {product.Name}-${product.price}
                </th>
                {product.Name}-${product.price}
         <button onClick={() => removeProduct(index)}>remove</button>
              </li>
            ))}
          </ul>
        </tr>
      </table>
    </div>
  );
}
