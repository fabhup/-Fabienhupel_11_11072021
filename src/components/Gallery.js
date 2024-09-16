import "../styles/Gallery.css";
import { Component } from "react";

class Gallery extends Component {
  state = { activeIndex: 0, touchStart: 0, touchEnd: 0 };
  render() {
    const nbPictures = this.props.picturesURL.length;

    const prevPicture = () => {
      this.setState({
        activeIndex:
          this.state.activeIndex === 0
            ? nbPictures - 1
            : this.state.activeIndex - 1,
      });
    };
    const nextPicture = () => {
      this.setState({
        activeIndex:
          this.state.activeIndex === nbPictures - 1
            ? 0
            : this.state.activeIndex + 1,
      });
    };
    const handleTouchStart = (e) => {
      this.setState({ touchStart: e.targetTouches[0].clientX });
    };
    const handleTouchMove = (e) => {
      this.setState({ touchEnd: e.targetTouches[0].clientX });
    };

    const handleTouchEnd = () => {
      if (this.state.touchStart - this.state.touchEnd > 100) {
        nextPicture();
      }
      if (this.state.touchStart - this.state.touchEnd < -100) {
        prevPicture();
      }
    };

    return (
      <div className="gallery">
        {this.props.picturesURL.map((picture, index) => {
          return (
            <div
              className={
                index === this.state.activeIndex
                  ? "gallery-slide active"
                  : "gallery-slide"
              }
              key={index + 1}
            >
              <div className="gallery-slide-number">
                {index + 1}/{nbPictures}
              </div>
              <img
                className="gallery-slide-picture"
                src={picture}
                alt={"picture " + (index + 1)}
                onTouchStart={(touchStartEvent) =>
                  handleTouchStart(touchStartEvent)
                }
                onTouchMove={(touchMoveEvent) =>
                  handleTouchMove(touchMoveEvent)
                }
                onTouchEnd={() => handleTouchEnd()}
              ></img>
            </div>
          );
        })}
        <button
          className={nbPictures > 1 ? "prev" : "prev hidden"}
          onClick={() => prevPicture()}
        >
          &#10094;
        </button>
        <button
          className={nbPictures > 1 ? "next" : "next hidden"}
          onClick={() => nextPicture()}
        >
          &#10095;
        </button>
      </div>
    );
  }
}

export default Gallery;
