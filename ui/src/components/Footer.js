import React from "react";
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-basic">
        <div className="f-row-1">
          <Link to="/" className="f-logo">FILE SHARE</Link>
          <p className="f-text" >Share files easily</p>
          <ul className="f-menu">
              <li className="f-list-item"><Link to="/" className="f-links">Home</Link></li>
              <li className="f-list-item"><Link to="/about" className="f-links">About</Link></li>
              <li className="f-list-item"><Link to="/api" className="f-links">API</Link></li>
          </ul>
        </div>
        <p className="copyright">File Share © 2022</p>
      </footer>
    </div>
  );
}

export default Footer;
