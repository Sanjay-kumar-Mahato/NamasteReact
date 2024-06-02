import React from "react"
import ReactDOM from "react-dom/client"
import appLogo from './food_app.png'; // Importing the image
/*
Header
 -logo
 -delivery Address
 -search
 -nav bar(home,About,Cart)

Body
 -Resturant card(pic,rating,delivery time,price/person)

Footer
 -copy right
 -contact
 */
const Header = () => {
    return (
        <div className="header">
            <img alt="app-logo" src={appLogo} />
            <div>
                <p><strong>Address :</strong>Maharani Farm,Jaipur,Rajasthan</p>
                <br></br>
                <input type="text" placeholder="Search..." className="search-bar" />
            </div>
            <nav className="nav-bar">
                <ul className="unorderred-nav">
                    <li>Home</li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    );
};
const RestCard = () => {
    return (
        <div className="res-card">
            <img src={appLogo} />
            <h4 className="res-name">Pintu Dabha</h4>
            <p>Roti,Vegs,Rice,Dal,Butter Milk
                <br></br>
                <br></br>
            400 Per Two</p>
            <div className="rate-time">
                <h5>4.0 Stars</h5>
                <div><p>25 mins</p></div>
            </div>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard />
            <RestCard></RestCard>
        </div>
    );
};
const Footer = () => {
    return (
        <div className="footer">
            <h4>Copyrights owned by me</h4>
            <h4>email</h4>
            <h4>Jaipur</h4>
        </div>
    )
};
const Layout = () => (
    <div className="layout">
        <Header />
        <Body />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("heading"));
root.render(< Layout />);