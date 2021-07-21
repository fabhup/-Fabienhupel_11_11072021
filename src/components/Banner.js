import '../styles/Banner.css'
import MainNav from './MainNav'
import logo from '../assets/logo.svg'

function Banner() {
	return <div className='kasa-banner'>
		<img src={logo} alt='Kasa' className='kasa-logo' />
        <MainNav></MainNav>
	</div>
}



export default Banner