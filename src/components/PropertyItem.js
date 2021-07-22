import "../styles/PropertyItem.css";
import { Link } from "react-router-dom";
import { cleanStringForLink } from "../functions/cleanData";
import PropTypes from "prop-types";
import { Component } from "react";

class PropertyItem extends Component {
  render() {
    return (
      <li className="kasa-property-item">
        <Link
          to={{
            pathname: `/appartement/${this.props.id}/${cleanStringForLink(
              this.props.title
            )}`,
          }}
        >
          <img
            className="kasa-property-item-cover"
            src={this.props.cover}
            alt={`${this.props.title} cover`}
          />
          <span className="kasa-property-item-title">{this.props.title}</span>
        </Link>
      </li>
    );
  }
}

PropertyItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default PropertyItem;
