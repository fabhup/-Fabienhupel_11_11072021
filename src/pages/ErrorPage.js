import "../styles/ErrorPage.css";
import { Component } from "react";

class ErrorPage extends Component {
  render() {
    return (
      <main className="kasa-error-content">
        <h1>404</h1>
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <a href="/">Retourner sur la page d’accueil</a>
      </main>
    );
  }
}

export default ErrorPage;
