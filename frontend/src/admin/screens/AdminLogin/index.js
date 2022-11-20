import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import logo from './../../../assets/clg.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const navigate = useNavigate();
  // const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // useEffect(()=>{
  //   const auth= localStorage.getItem('adminToken');
  //   if(auth){
  //     navigate('/admin/timeline')
  //   }
  // })

  const loginuser = async (e) => {
    e.preventDefault();

    let res = await fetch("http://localhost:8000/api/admin/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
     res = await res.json();
     console.log(res);
     if(res.email){
      localStorage.setItem('admin',JSON.stringify(res));
      localStorage.setItem('adminToken',JSON.stringify(res.token));
      navigate('/admin/timeline')
     }else{
      toast.error("Invalid Credentials!!",{
        position:"top-center"
      });
     }
   };
  return (
    <div className="limiter">
      <div className="container-login">
        <div className="wrap-login">
          <form
            className="login-form form-group"
            method="POST"
            onSubmit={loginuser}
          >
            <span className="login-form-title mb-3">
              <h3>
                <u>Admin LogIn</u>
              </h3>
            </span>
            <span className="login-form-logo mt-3 mb-3">
              <img className="img-circle" src={logo} alt="logo" />
            </span>
            <div className="wrap-input">
              <input
                className="form-control"
                type="text"
                name="userid"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="wrap-input mb-2">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            {/* <h6 className="error text-light mx-3">{this.state.error}</h6> */}
            <div className="login-form-btn text-center">
              <button className="btn btn-light" type="submit" >
                Login
              </button>
              
            </div>
           
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Index;