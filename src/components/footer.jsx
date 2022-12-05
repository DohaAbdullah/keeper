import { React } from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <p className="copyright">copyright © {year}</p>
    </div>
  );
}

export default Footer;
