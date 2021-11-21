import React from "react";
import Form from "./components/Form";
import bg from './assets/bg-login.jpeg'

const Login = () => {
  return (
    <div className="login-content">
      <div>
      <h1 className="primary-text text-center">Create Account</h1>
      <div className="row-content">
        <div className="circle center-items">
          <i className="fab fa-google"></i>
        </div>
        <div className="circle center-items">
          <i className="fab fa-facebook-f"></i>
        </div>
        <div className="circle center-items">
          <i className="fab fa-twitter"></i>
        </div>
        <div className="circle center-items">
          <i className="fab fa-vk"></i>
        </div>
      </div>
      <p className="text-center">or use your email for registration</p>
      <Form />
      </div>
      <div>
        <img src={bg} alt="background"/>
      </div>
    </div>
  );
};

export default Login;
