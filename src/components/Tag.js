import "../styles/Tag.css";
import { Component } from "react";

class Tag extends Component {
  render() {
    return (
      <div>
        <button
          key={this.props.tagname}
          value={this.props.tagname}
          className="kasa-tag"
        >
          {this.props.tagname}
        </button>
      </div>
    );
  }
}

export default Tag;
