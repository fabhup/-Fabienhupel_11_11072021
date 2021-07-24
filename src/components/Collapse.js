// import { useState } from 'react'
import "../styles/Collapse.css";
import { Component } from "react";
import PropTypes from "prop-types";

class Collapse extends Component {
  state = { isOpen: false };
  render() {
    const { isOpen } = this.state;

    const updateState = () => {
      isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true })
    }

    return (
      <div className={"collapse " + (isOpen ? "opened" : "closed")}>
        <button
          className="collapse-title"
          onClick={() => updateState()}
        >
          {this.props.collapseTitle}
        </button>
        <div className="collapse-content">{this.props.collapseContent}</div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false,
};
Collapse.propTypes = {
  collapseTitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

export default Collapse;
