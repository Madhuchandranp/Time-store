import { useContext, useState } from "react";
import { mycontext } from "./context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../user_styles/page.css";
import "../user_styles/Signup.css";

export default function Userlogin() {
  const { user, setLogUser } = useContext(mycontext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  function loginBtn() {
    const loggedUser = user.find(
      (userData) => userData.email === email && userData.password === password
    );

    if (loggedUser) {
      setLogUser(loggedUser);
      alert("Login successful !!!");
      nav("/");
    } else {
      alert("invalid email or password");
    }
  }

  return (
    <div className="LOG">
      <h1>Login</h1>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button onClick={loginBtn}>Login</button>
        <div class="container signin">
          <p>
            create an account
            <Link to={"/Usersignup"} className="link">
              <span>signup </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
