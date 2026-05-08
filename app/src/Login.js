import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import "./Welcome"
import "./Report"

 
const Login = () => {
 
    let nav=useNavigate()
  let [username, setUsername] = useState();
  let [password, setPassword] = useState();
 
  function handleuserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleLogin() {
    if (username === "admin" && password === "admin") {
         localStorage.setItem(
      "username",
      JSON.stringify(username) 
    );
     localStorage.setItem(
      "password",
      JSON.stringify(password) 
    );


        // nav("/Report")
         
    } else {
      alert("Login failed");
    }
  }
 
  return (
    <div className="d1">
      <h1>Login</h1>
      <input type="text" placeholder="Enter username" onChange={handleuserName} /> <br />
      <input type="password" placeholder="Enter password" onChange={handlePassword} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
    </div>
  );
}
 
export default Login;
 