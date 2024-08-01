import "./App.css";
import Home from "./user_watch/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./user_watch/Navbar";
import { mycontext } from "./user_watch/context";
import { useState } from "react";
import { Watchs } from "./user_watch/watchfaces";
import Addtocart from "./user_watch/Addtocart";
import Showpage from "./user_watch/Showpage";
import Casualwatch from "./user_watch/Casualwatchs";
import Userlogin from "./user_watch/Userlogin";
import Usersignup from "./user_watch/Usersignup";
import Adminlogin from "./Adminpanel/Adminlogin";
import Adminpanel from "./Adminpanel/Adminpanel";
import Allprdctadmin from "./Adminpanel/Allprdctadmin";
import Orders from "./Adminpanel/Orders";
import Usersadmin from "./Adminpanel/Usersadmin";
import Deleteprdct from "./Adminpanel/Deleteprdct";
import Adminaddprdct from "./Adminpanel/Adminaddprdct";
import RegisterInput from "./user_watch/RegisterInput";
import Placeorder from "./user_watch/Placeorder";
import Carouseluser from "./user_watch/Carouseluser";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Newcart from "./user_watch/Newcart";
import Like from "./user_watch/like";
import Fastrack from "./user_watch/fastrack";
import Cartnavbar from "./user_watch/cartnavbar";
import Footer from "./user_watch/footer";
import ImageGallery from 'react-image-gallery';

function App() {
  const [watch, setWatch] = useState(Watchs);
  const [like, setLike] = useState([]);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);
  const [id, setId] = useState([""]);
  const [edit, setEdit] = useState(" ");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [loguser, setLogUser] = useState([]);
  const [panel, setPanel] = useState(true);

  const values = {
    watch,
    setWatch,
    searchInput,
    setSearchInput,
    like,
    setLike,
    cart,
    setCart,
    price,
    setPrice,
    user,
    setUser,
    loguser,
    setLogUser,
    id,
    setId,
    edit,
    setEdit,
    productName,
    setProductName,
    productPrice,
    setProductPrice,
    panel,
    setPanel,
    Addtocart,
  };

  console.log("user", user);

  return (
    <div className="App">
      <BrowserRouter>
        <mycontext.Provider value={values}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/Addtocart" element={<Addtocart />} />
            <Route path="/item/:id" element={<Showpage />} />
            <Route path="/Casualwatch" element={<Casualwatch />} />
            <Route path="/Userlogin" element={<Userlogin />} />
            <Route path="/Usersignup" element={<Usersignup />} />
            <Route path="/Adminlogin" element={<Adminlogin />} />
            <Route path="/Adminpanel" element={<Adminpanel />} />
            <Route path="/Allprdctadmin" element={<Allprdctadmin />} />
            <Route path="/Deleteprdct" element={<Deleteprdct />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Usersadmin" element={<Usersadmin />} />
            <Route path="/Adminaddprdct" element={<Adminaddprdct />} />
            <Route path="/RegisterInput" element={<RegisterInput />} />
            <Route path="/Placeorder" element={<Placeorder />} />
            <Route path="/Carouseluser.jsx" element={<Carouseluser />} />
            <Route path="/Newcart.jsx" element={<Newcart />} />
            <Route path="/fastrack" element={<Fastrack />} />
            <Route path="/like" element={<Like />} />
            <Route path="/Cartnavbar" element={<Cartnavbar />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </mycontext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
