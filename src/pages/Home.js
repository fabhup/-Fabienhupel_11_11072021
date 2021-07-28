import "../styles/HomeContent.css";
import PropertiesList from "../components/PropertiesList";
import { Component } from "react";

class Home extends Component {
  render() {
    return (
      <main className="kasa-home-content">
        <div className="kasa-tagline">
          <span>Chez vous, partout et ailleurs</span>
        </div>
        <PropertiesList></PropertiesList>
      </main>
    );
  }
}

export default Home;
