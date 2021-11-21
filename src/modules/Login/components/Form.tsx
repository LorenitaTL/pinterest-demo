import React from "react";

const Form = () => {
  return (
    <div>
      <form className="column-content">
        <input className="input-form" placeholder="Name"></input>
        <input className="input-form" placeholder="Email"></input>
        <input className="input-form" placeholder="Password"></input>
        <label>
          <input type="checkbox"></input>I agree to the{" "}
          <span className="primary-text">Terms</span> and{" "}
          <span className="primary-text">Privacy Policy</span>
        </label>

        <div className="row-content">
          <button className="btn">Sign Up</button>
          <button className="btn-outlined">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
