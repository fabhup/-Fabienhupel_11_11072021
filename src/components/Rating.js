import "../styles/Rating.css";
import { Component } from "react";

class Rating extends Component {
  render() {
    return (
      <div className="rating" data-rating={this.props.ratingValue}>
        {[...Array(+this.props.ratingMax).keys()].map((n) => {
          return (
            <span
              className={
                "star " + (n < this.props.ratingValue ? "full" : "empty")
              }
              key={n + 1}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    );
  }
}

export default Rating;
