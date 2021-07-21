import '../styles/PropertyItem.css';
import {Link} from "react-router-dom";
import {cleanStringForLink} from "../functions/cleanData"


function PropertyItem({ id, cover, title }) {
	return (
			<li className='kasa-property-item'>
				<Link to={{pathname: `/appartement/${id}/${cleanStringForLink(title)}`}}>
					<img className='kasa-property-item-cover' src={cover} alt={`${title} cover`} />
					<span className='kasa-property-item-title'>{title}</span>
				</Link>
			</li>

	)
}

export default PropertyItem