import React from "react";
import { Link } from 'react-router-dom';
import './Form.css';

function LogIn() {

  return (
    <>
    <div className="app-container">
      <div className="box-container">
        <div className="top-container">
          <div className="back-drop" ></div>
          <div className="head-container">
            <h2 className="head-text">Welcome</h2>
            <h2 className="head-text">Back</h2>
            <h5 className="small-text">Please log-in to continue</h5>
          </div>
        </div>
        <div className="form-logo">
          <p>FILE SHARE</p>
        </div>
        <form className="form-container">
          <input type="email" placeholder="Email" className="input-data"/>
          <input type="password" placeholder="Password" className="input-data" />
          <Link to="/reset-password" className="muted-link">Forgot Password ?</Link>
          <button type="button" className="btn-submit" >LOGIN</button>
          <p className="inner-text">Don't have an account ?<Link to="/sign-up" className="bold-link">Sign Up</Link></p>
        </form>
      </div>
    </div>
    </>
  );
}

export default LogIn;
