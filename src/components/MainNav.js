import '../styles/MainNav.css'
import {
    NavLink
  } from "react-router-dom";
function MainNav() {
	return <div className='kasa-main-nav'>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" id="link-accueil" className='kasa-main-nav-link'>Accueil</NavLink>
            </li>
            <li>
              <NavLink exact to="/apropos" id="link-apropos" className='kasa-main-nav-link'>À Propos</NavLink>
            </li>
          </ul>
        </nav>
    </div>
}

export default MainNav