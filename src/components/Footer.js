import "../styles/Footer.css";
import logo from "../assets/logo.svg";
import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} alt="Logo Kasa" className="footer-logo" />
        <span>
          {"© " + new Date().getFullYear() + " Kasa. All rights reserved"}
        </span>
      </div>
    );
  }
}

export default Footer;
