import { useState } from 'react'
import '../styles/Collapse.css'

function Collapse ({collapseTitle, collapseContent}) {
    const [isOpen, setIsOpen] = useState(false)

    return <div className={"collapse "+(isOpen ? "opened" : "closed")}>
        <button className="collapse-title"
        		onClick={() => {
                    isOpen ? setIsOpen(false) : setIsOpen(true)
                }}
        >
            {collapseTitle}
        </button>
        <div className="collapse-content">{collapseContent}
        </div>
        </div>
}

export default Collapse