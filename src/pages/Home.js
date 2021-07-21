
import '../styles/HomeContent.css'
import PropertiesList from '../components/PropertiesList'


function Home() {
    return <div> 
        <div className='kasa-tagline'>
            <span>Chez vous, partout et ailleurs</span>
        </div>
        <PropertiesList>
        </PropertiesList>
    </div>
        ;
  }

  export default Home