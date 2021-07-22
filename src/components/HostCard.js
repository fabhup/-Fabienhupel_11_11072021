import "../styles/HostCard.css";
import { Component } from "react";
import PropTypes from "prop-types";

class HostCard extends Component {
  render() {
    return (
      <div className="hostcard">
        <span className="hostcard-name">{this.props.hostName}</span>
        <img
          className="hostcard-picture"
          src={this.props.hostImageURL}
          alt={"Photo de profil de " + this.props.hostName}
        />
      </div>
    );
  }
}

HostCard.propTypes = {
  hostName: PropTypes.string.isRequired,
  hostImageURL: PropTypes.string.isRequired,
};

export default HostCard;
