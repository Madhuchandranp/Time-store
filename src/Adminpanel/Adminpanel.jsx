import { useContext } from "react";
import "../user_styles/adminpan.css";
import Navbar from "../user_watch/Navbar";

import { Link } from "react-router-dom";
import { mycontext } from "../user_watch/context";
import Footer from "../user_watch/footer";

export default function Adminpanel() {
  const { watchs } = useContext(mycontext);

  return (
    <div className="container">
       
      <div className="bton">   
        <button className="limksa">
          <Link to={"/home"} className="link">
            HOME
          </Link>
          <br />
        </button>
      </div>

      <div className="wellness">
        <div className="well">
          <Link to={"/Allprdctadmin"} className="links">
            {" "}
            <h4>All product</h4>{" "}
          </Link>
        </div>

        <div className="well">
          <Link to={"/Adminaddprdct"} className="links">
            {" "}
            <h4>Addproduct</h4>{" "}
          </Link>
        
        </div>
        <div className="well">
          <Link to={"/Usersadmin"} className="links">
            {" "}
            <h4>Users</h4>{" "}
          </Link>
        </div>
      </div>
     <Footer/>
    </div>
  );
}
