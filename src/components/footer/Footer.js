import './footer.scss'
import earth from '../../images/Icon/earth.png'
import arrow from '../../images/Icon/arrow1.png'
import payment from '../../images/Icon/payment.png'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-topHeader">
                <div className="footer-topHeader__left">
                    <button>+</button>
                    <h5>quick links</h5>
                    <p>Explore more categories</p>
                </div>
                <div className="footer-topHeader__right">
                    <a href="tel:+0123-456-324-54">0123-456-324-54</a>
                    <span>|</span> 
                    <a href="mailto:hello@entrada.com">hello@entrada.com</a>
                </div>
            </div>
            <div className="footer-header">
                <div className="footer-header__left">
                    <p>Get in touch</p>
                    <h4>Adventures Calling <br /> You Guys!</h4>
                </div>
                <div className="footer-header__right">
                    <div className="footer-header__right-block">
                        <img src={earth} alt="" />
                        <p>Our Offices <br /><span>Nepal, USA, India</span></p>
                    </div>
                    <a href="/"><img src={arrow} alt="" /></a>
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-main__left">
                    <div className="footer-main__navigation">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/">Budget Tours</a></li>
                            <li><a href="/">Expert Insight</a></li>
                            <li><a href="/">Independent</a></li>
                            <li><a href="/">Luxury Tours</a></li>
                            <li><a href="/">Safety Tips</a></li>
                            <li><a href="/">Tips n Tricks</a></li>
                        </ul>
                    </div>
                    <div className="footer-main__navigation">
                        <h4>Adventures</h4>
                        <ul>
                            <li><a href="/">Beach Activity</a></li>
                            <li><a href="/">Bungee Jump</a></li>
                            <li><a href="/">City Tour</a></li>
                            <li><a href="/">Hiking Trips</a></li>
                            <li><a href="/">Jungle Safari</a></li>
                            <li><a href="/">Night City Walk</a></li>
                        </ul>
                    </div>
                    <div className="footer-main__navigation">
                        <h4>Country</h4>
                        <ul>
                            <li><a href="/">USA</a></li>
                            <li><a href="/">Australia</a></li>
                            <li><a href="/">South Africa</a></li>
                            <li><a href="/">West Indies</a></li>
                            <li><a href="/">New Zealand</a></li>
                            <li><a href="/">Srilanka</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main__right">
                    <p>Get in touch</p>
                    <h5>Let’s Talk</h5>
                    <div className="subscribe-form">
                        <form action="POST">
                            <input type="email" name="" id="" placeholder='Enter your email'/>
                            <button type="submit">Send Now!</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-footer">
                <a href="/">Privacy policy</a>
                <div className="footer-footer__links">
                    <a href="https://linkedin.com">Linkedin</a>
                    <span> / </span>
                    <a href="https://facebook.com">Facebook</a>
                    <span> / </span>
                    <a href="https://instagram.com">Instagram</a>
                </div>
            </div>
            <div className="footer-subFooter">
                <p>2016-2021 © Emprise</p>
                <img src={payment} alt="" />
            </div>
        </footer>
    )
}

export default Footer