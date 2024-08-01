import { Link } from "react-router-dom";
import "../user_styles/Navbar.css";
import React, { useContext } from "react";
import { mycontext } from "./context";
import { useNavigate } from "react-router-dom";


export default function Cartnavbar() {
    const nav = useNavigate();
    const { searchInput, setSearchInput } = useContext(mycontext);
    const { setLogUser } = useContext(mycontext);
  
    const PathtoMap = {
      cas: "/Casualwatch",
      fa:"/fastrack",
      // gi:"/girlswatch",
    };
    function handleSearch() {
      const lowercaseInput = searchInput.toLowerCase();
      for (const keyword in PathtoMap) {
        if (lowercaseInput.startsWith(keyword)) {
          return PathtoMap[keyword];
        }
      }
  
    }
   
  
    return (
      <div className="navbar">
       <p className="ic"><i class="bi bi-watch" ></i> </p><h1>watch</h1>
        <div className="left"></div>
        <div className="all">
       
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button>
            <Link to={handleSearch()}>Search</Link>
          </button>
        
              <Link to={"/Userlogin"} className="link"><i class="bi bi-person-fill-add"></i>
                login
              </Link>
        
             
            </div>
         
          
       
      </div>
    );
  }
  