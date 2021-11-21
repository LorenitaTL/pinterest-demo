import React from "react";

const FormSignIn = () => {
  return (
    <div className="spacing">
      <form className="column-content">
        <input className="input-form" placeholder="Email"></input>
        <input className="input-form" placeholder="Password"></input>

        <div className="row-content spacing">
          <button className="btn">Sign In</button>
          <button className="btn-outlined">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default FormSignIn;
