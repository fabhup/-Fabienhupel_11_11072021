import "../styles/Banner.css";
import MainNav from "./MainNav";
import logo from "../assets/logo.svg";
import { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="kasa-banner">
        <img src={logo} alt="Kasa" className="kasa-logo" />
        <MainNav></MainNav>
      </div>
    );
  }
}

export default Banner;
