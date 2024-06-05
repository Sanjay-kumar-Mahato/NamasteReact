// import appLogo from '../utils/food_app.png';// Importing the image
import appLogo from '../utils/Sonya-Swarm-Fast-Food.png';// Importing the image
const Header = () => { 
    return (
        <div className="header">
            <img alt="app-logo" src={appLogo} />
            <div className="nav-bar">
                <ul className="unorderred-nav">
                    <li>Home</li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;