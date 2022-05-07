import React from "react";
import './Form.css';

function ResetPassword() {
  return (
    <>
    <div className="app-container">
      <div className="box-container">
        <div className="top-container">
          <div className="back-drop" ></div>
          <div className="head-container">
            <h2 className="head-text">Reset</h2>
            <h2 className="head-text">Password</h2>
            <h5 className="small-text">Please enter email to reset your account</h5>
          </div>
        </div>
        <form className="form-container">
          <input type="email" placeholder="Email" className="input-data" />
          <button type="submit" className="btn-submit">RESET</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default ResetPassword;