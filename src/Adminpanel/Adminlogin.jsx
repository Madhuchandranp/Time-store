import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [panel,setPanel]=useState("true");
  const nav = useNavigate();

  const handleLogin = () => {
    if (email === "admin" && password === "admin///") {
      alert("Login successful !!!");
      nav("/Adminpanel","/Navbar");

    } else {
      alert("invalid email or password");
    }
  };
  

  return (
    <div>
      <h1>ADMIN LOGIN</h1>
      <div>
 
        <input
          type="email"
          placeholder="admin name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>log</button>
      </div>
    </div>
  );
}
