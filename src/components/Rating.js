import '../styles/Rating.css'

function Rating ({ratingValue, ratingMax}) {
    return <div className="rating" data-rating={ratingValue}>
        {[...Array(+ratingMax).keys()].map(n => {
            return (<span
                className={"star " + (n<ratingValue ? "full" : "empty")}
                key={n+1}
            > 
            &#9733;
            </span>)
        })}
      </div>
  }

  export default Rating