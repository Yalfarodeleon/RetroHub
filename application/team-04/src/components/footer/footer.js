import React from "react";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Team-04</p>
      </div>
    </footer>
  );
}

export default Footer;
