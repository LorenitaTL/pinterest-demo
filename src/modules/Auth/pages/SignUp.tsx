import React from "react";
import FormSingUp from "../components/FormSingUp";
import bg from '../assets/bg-login.jpeg'

const SignUp = () => {
  return (
    <div className="auth-content">
      <div className="form-auth">
      <h1 className="primary-text text-center">Create Account</h1>
      <div className="row-content spacing">
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
      <p className="text-center spacing">or use your email for registration</p>
      <FormSingUp />
      </div>
      <div className="image-auth">
        <img src={bg} alt="background"/>
      </div>
    </div>
  );
};

export default SignUp;
