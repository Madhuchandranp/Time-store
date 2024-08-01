import { useContext, useState } from "react";
import { mycontext } from "./context";
import { useNavigate } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import "../user_styles/page.css";

export default function Usersignup() {
  const { user, setUser } = useContext(mycontext);

  const [password, setPassword] = useState("");
  const isUseralrteadyRegisterd = () => {
    return user.find((userdata) => userdata.email === inputs);
  };
  const nav = useNavigate();
  console.log(password);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "User Name",
      // errorMessage: "username must contsin 3-16 characters and shouldn't contain any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "E-mail",
      // errorMessage: "E-mail adress should be valid",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "PassWord",
      // errorMessage: "password should be 4-16 character and contain atleast 1 letter And 1 number !",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "confirmPassword",
      // errorMessage: "the given password dosen't match",
      label: "confirmPassword",
      pattern: password.password,
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = [...user, password];
    setUser(updatedUserData);

    console.log("user", user);

    nav("/Userlogin");
  };

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  if (isUseralrteadyRegisterd()) {
    alert("email already exist please try another email");
    return;
  }

  return (
    <div className="reg-form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <RegisterInput
            key={input.id}
            {...input}
            values={password[input.name]}
            onChange={handleChange}
          />
        ))}
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}
