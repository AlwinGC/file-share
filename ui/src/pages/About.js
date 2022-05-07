import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h3 className="a-head">About Us</h3>
      <div className="a-box-container">
        <p className="a-inner-text">
          This a file sharing API application, Users can upload a file and it
          creates a random URL which they can share. It will allow anyone with
          this URL to download the uploaded file. No need to Sign Up, easy free
          file sharing service. 
        </p>
        <p className="a-inner-text">The current version supports file upload up to
          3GB. Anonymous uploads without an account will have a limit on how
          long files will be available for download.
        </p>
        <p className="a-inner-text"> Anonymous uploads - File
          expires after 24 hours 
        </p>
        <p className="a-inner-text">  Users with account - File expires after 48
          hours
        </p>
      </div>
      <h3 className="a-sub-head">Share Files Privately</h3>
      <div className="a-box-container">
        <p className="a-inner-text">
          If the user Signs Up for an account, the person who needs to download
          the file should also sign up in order to access the file. Share Files
          Privately through the API provides users the capability to specify
          file expiry time.
        </p>
      </div>
    </div>
  );
}

export default About;
