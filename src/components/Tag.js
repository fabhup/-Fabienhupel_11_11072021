import '../styles/Tag.css'

function Tag ({tagname}) {
    return <div>
        <button key={tagname} value={tagname} className="kasa-tag">
              {tagname}
        </button>
      </div>
  }

  export default Tag