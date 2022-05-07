import React from "react";
import "./Home.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="hero-container">
        <section className="section-home">
          <div className="section-content">
            <span className="material-icons upload">upload_file</span>
            <div className="upload-col1">
              <h4 className="heading-text">Share files quickly and easily with Fileshare </h4>
              <h4 className="sub-heading">Share with anyone around the world. Upload files upto 3 GB</h4>
              <Button buttonStyle="btn--home-section" buttonSize="btn--home">
                UPLOAD
              </Button>
            </div>
          </div>
        </section>
        <section className="section-home">
          <div className="section-content">
          <span className="material-icons signup">account_circle</span>
            <div className="signup-col1">
              <h4 className="heading-text">Create a free account</h4>
              <h4 className="sub-heading">Upload your files and store it privately</h4>
              <Link to="sign-up" className="home-link">
                <Button buttonStyle="btn--home-section" buttonSize="btn--home">
                  SIGN UP
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
