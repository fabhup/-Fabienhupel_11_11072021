import { propertiesData } from '../data/propertiesData'
import PropertyItem from './PropertyItem'
import '../styles/PropertiesList.css';


function PropertiesList() {
	return (
		<div className='kasa-properties-list'>
			<ul className='kasa-properties-list'>
				{propertiesData.map(({ id, title, cover}) =>
					<div key={id}>
						<PropertyItem
							id={id}
							cover={cover}
							title={title}
						/>
					</div>
				)}
			</ul>
		</div>
	)
}

export default PropertiesList
