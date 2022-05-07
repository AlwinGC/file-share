import React from "react";
import { Link } from "react-router-dom";
import './Form.css';

function SignUp() {
  return (
    <>
    <div className="app-container">
      <div className="box-container">
        <div className="top-container">
          <div className="back-drop"/>
          <div className="head-container">
            <h2 className="head-text">Create</h2>
            <h2 className="head-text">Account</h2>
            <h5 className="small-text">Please sign-up to continue</h5>
          </div>
        </div>
        <form className="form-container">
          <input type="text" placeholder="Username" className="input-data" />
          <input type="email" placeholder="Email" className="input-data" />
          <input type="password" placeholder="Password" className="input-data" />
          <input type="password" placeholder="Confirm Password" className="input-data" />
          <button type="submit" className="btn-submit">SIGN UP</button>
          <p className="inner-text">Already have an account ?<Link to="/log-in" className="bold-link">Log In</Link></p>
        </form>
      </div>
    </div>
    </>
  );
}

export default SignUp;
