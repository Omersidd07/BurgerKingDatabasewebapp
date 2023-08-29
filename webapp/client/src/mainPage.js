//import logo from './logo.svg';
//import './App.css';
import React, {useState/*, useEffect*/} from "react";
import Axios from "axios";
import App from "./App";


function mainPage() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [UsernameLogin, setUsernameLogin] = useState("");
  const [PasswordLogin, setPasswordLogin] = useState("");

  const [LoginStatus, setLoginStatus] = useState("");

  const submitRegister = () => {
    Axios.post("http://localhost:3002/api/insert", {
      Username: userName,
      Password: password,
    });
    alert("You have been registered!");

  };


  const LoginUser = () => {
    Axios.post("http://localhost:3002/api/login", {
      Username: UsernameLogin,
      Password: PasswordLogin,
    }).then((response) =>{

      if(response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus("Hello, " + response.data[0].Username)
      }


    });



  };





  return (
    <div className="mainPage">
      <div className ="Registration">
        <label>Username:</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          />

        <label>Password:</label>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          />

        <button onClick={submitRegister}>Register</button>
      </div>
      
      
      <div className ="Login">
        <label>Username:</label>
        <input
          type="text"
          name="userName"
          onChange={(e) => {
            setUsernameLogin(e.target.value);
          }}
          />

        <label>Password:</label>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            setPasswordLogin(e.target.value);
          }}
          />

        <button onClick={LoginUser}>Login</button>
      </div>
    
    
    
    <h1>{LoginStatus}</h1>
    </div>
  );
}

export default mainPage;
