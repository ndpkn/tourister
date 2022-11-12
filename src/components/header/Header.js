import './header.scss'
import search from '../../images/Icon/search.png'
import { Link } from 'react-router-dom'
import unliked from '../../images/Icon/Vector.png'


const Header = () => {
    return (
        <header className='header'>
            <div className="header-logo"><Link to="/">Emprise</Link></div>
            <nav>
                <ul className='header-links'>
                    <li className="header-links__link"><a href="/">Destination</a></li>
                    <li className="header-links__link"><a href="/">Activities</a></li>
                    <li className="header-links__link"><a href="/">Specials</a></li>
                    <li className="header-links__link"><Link to="/search"><img src={search} alt="" /></Link></li>
                    <li className="header-links__link"><Link to="/favorites"><img src={unliked} alt="" /></Link></li>
                </ul>
            </nav>
            <div className="header-btns">
                <div className="header-btns__login">
                    <button>Login</button>
                </div>
                <div className="header-btns__sign">
                    <button>Sign up</button>
                </div>
            </div>
        </header>
    )
}

export default Header