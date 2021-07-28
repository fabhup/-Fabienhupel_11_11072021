import "../styles/About.css";
import Collapse from "../components/Collapse";
import { Component } from "react";

class About extends Component {
  render() {
    return (
      <main className="kasa-about-content">
        <div className="kasa-about-image"></div>
        <Collapse
          collapseTitle="Fiabilité"
          collapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Collapse
          collapseTitle="Respect"
          collapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          collapseTitle="Service"
          collapseContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          collapseTitle="Sécurité"
          collapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </main>
    );
  }
}

export default About;
