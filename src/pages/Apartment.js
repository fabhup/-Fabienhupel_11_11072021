import { propertiesData } from "../data/propertiesData";
import "../styles/Apartment.css";
import Rating from "../components/Rating";
import HostCard from "../components/HostCard";
import Collapse from "../components/Collapse";
import Gallery from "../components/Gallery";
import Tag from "../components/Tag";
import "../styles/ErrorPage.css";
import ErrorPage from "../pages/ErrorPage";
import { Component } from "react";
import { withRouter } from "react-router";

function getApartmentData(id) {
  return propertiesData.find((element) => element.id === id);
}

class Apartment extends Component {
  render() {
    const id = this.props.match.params.id;

    try {
      const apartmentData = getApartmentData(id);
      return (
        <main className="kasa-apartment-content">
          <Gallery picturesURL={apartmentData.pictures} />
          <div className="kasa-apartment-title">
            <h1>{apartmentData.title}</h1>
            <span className="kasa-apartment-location">
              {apartmentData.location}
            </span>
          </div>
          <div className="kasa-apartment-hostcard">
            <HostCard
              hostName={apartmentData.host.name}
              hostImageURL={apartmentData.host.picture}
            />
          </div>
          <div className="kasa-apartment-tags">
            {apartmentData.tags.map((tag) => (
              <Tag tagname={tag} key={tag} className="kasa-apartment-tag" />
            ))}
          </div>
          <div className="kasa-apartment-rating">
            <Rating ratingValue={apartmentData.rating} ratingMax="5" />
          </div>
          <div className="kasa-apartment-collapses">
            <Collapse
              collapseTitle={"Description"}
              collapseContent={apartmentData.description}
            />
            <Collapse
              collapseTitle={"Equipements"}
              collapseContent={
                <ul>
                  {apartmentData.equipments.map((elt) => (
                    <li key={elt}>{elt}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </main>
      );
    } catch {
      return <ErrorPage/>;
    }
  }
}

export default withRouter(Apartment);
