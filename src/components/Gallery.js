import '../styles/Gallery.css'
import { useState } from 'react'

function Gallery ({picturesURL}) {
    const [activeIndex, setActiveIndex] = useState(0)
    const nbPictures = picturesURL.length;

    const prevPicture = () => {
        setActiveIndex(activeIndex === 0 ? nbPictures - 1 : activeIndex - 1)
    }

    const nextPicture = () => {
        setActiveIndex(activeIndex === nbPictures - 1 ? 0 : activeIndex + 1)
    }

    return <div className="gallery">
        {picturesURL.map((picture, index) => {
            return <div className={index === activeIndex ? "gallery-slide active" : "gallery-slide"} key={index+1}> 
                <div className="gallery-slide-number">
                    {index+1}/{nbPictures}
                </div>
                <img className="gallery-slide-picture" src={picture} alt={"picture " + (index+1)}></img>
            </div>
        })
        }
        <button 
            className={nbPictures>1 ? "prev" : "prev hidden"}
            onClick={() => prevPicture()}
        >
            &#10094;
        </button>
        <button 
            className={nbPictures>1 ? "next" : "next hidden"}
            onClick={() => nextPicture()}
        >
            &#10095;
        </button>
    </div>
}

export default Gallery