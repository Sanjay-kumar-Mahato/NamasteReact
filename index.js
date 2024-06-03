import React from "react"
import ReactDOM from "react-dom/client"
import appLogo from './food_app.png'; // Importing the image
/*
Header
 -logo
 -nav bar(home,About,Cart)
 
 Body
 -delivery Address
 -search
 -Resturant card(pic,rating,delivery time,price/person)

Footer
 -copy right
 -contact
 */
const resList = [
    {
        "id": "514975",
        "name": "Brown Sugar",
        "cloudinaryImageId": "1c8bd4259566787b70ebad7a61157e6e",
        "locality": "Hawa Sadak",
        "areaName": "Bais Godam",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Desserts",
            "Bakery",
            "Snacks",
            "Beverages",
            "Pizzas"
        ],
        "avgRating": 4.4,
        "deliveryTime": 18
    },
    {
        "id": "44359",
        "name": "Sethi Bar-Be-Que",
        "cloudinaryImageId": "ypcc8quio98rj9xxwekh",
        "locality": "Raja Park",
        "areaName": "Raja Park",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "North Indian",
            "Mughlai",
            "Chinese",
            "Biryani",
            "Afghani",
            "Kebabs",
            "Punjabi"
        ],
        "avgRating": 4.4,
        "deliveryTime": 20,

    },
    {
        "id": "73781",
        "name": "Bombay Mishthan Bhandar (BMB) - Sanganeeri Gate",
        "cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
        "locality": "Johari Bazaar",
        "areaName": "MI Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "North Indian",
            "Thalis",
            "Chinese",
            "Mughlai",
            "Chaat",
            "Punjabi",
            "Desserts",
            "Snacks",
            "Rajasthani",
            "Tandoor",
            "Sweets",
            "Indian",
            "Beverages",
            "Ice Cream",
            "Italian",
            "Pastas"
        ],
        "avgRating": 4.4,
        "deliveryTime": 20
    },
    {
        "id": "70613",
        "name": "Tadka Lali Ka Vaishno Dhaba",
        "cloudinaryImageId": "pbwormtyxnp3cwgclyjq",
        "locality": "Adarsh Nagar",
        "areaName": "Adarsh Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "North Indian",
            "Thalis",
            "Chinese",
            "Mughlai",
            "Chaat",
            "Punjabi",
            "Desserts",
            "Snacks",
            "Rajasthani",
            "Tandoor",
            "Sweets",
            "Indian",
            "Beverages",
            "Ice Cream",
            "Italian",
            "Pastas"
        ],
        "avgRating": 4.6,
        "deliveryTime": 16,
    },
    {
        "id": "45989",
        "name": "Marky Momos",
        "cloudinaryImageId": "vnywgfhmaycozix5u7qh",
        "locality": "Raja Park",
        "areaName": "Raja Park",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Chinese",
            "Asian",
            "Pan-Asian",
            "Indian",
            "Thai",
            "Thalis",
            "Kebabs",
            "Grill",
            "Tandoor",
            "Biryani",
            "Desserts"
        ],
        "avgRating": 4.4,
        "deliveryTime": 22,

    },
    {
        "id": "65147",
        "name": "Narayan Egg Corner",
        "cloudinaryImageId": "nuymd9pwhawl1m8ompst",
        "locality": "Ma Mangal Marg ",
        "areaName": "Bapu Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Thalis",
            "Chinese",
            "Mughlai",
            "Chaat",
            "Punjabi",
            "Desserts",
            "Snacks",
            "Rajasthani",
            "Tandoor",
            "Sweets",
            "Indian",
            "Beverages",
            "Ice Cream",
            "Italian",
            "Pastas"
        ],
        "avgRating": 4.3,
        "deliveryTime": 20,

    },
    {
        "id": "57530",
        "name": "Sarvan Cafe",
        "cloudinaryImageId": "taj0rrddozarbjrkeaca",
        "locality": "Raja Park",
        "areaName": "Raja Park",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "South Indian"
        ],
        "avgRating": 4.3,
        "deliveryTime": 16,
    },
    {
        "id": "821633",
        "name": "Murga Shurga",
        "cloudinaryImageId": "171d2ce6986374c1cc60de04887fba0b",
        "locality": "Raja Park",
        "areaName": "Raja Park",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Mughlai",
            "Chinese",
            "Biryani",
            "Kebabs"
        ],
        "avgRating": 4.4,
        "deliveryTime": 22,

    },
    {
        "id": "176584",
        "name": "Ramji Lal Sharma Pavitra Bhojnalaya",
        "cloudinaryImageId": "cz2tjlp35migcoyfai4o",
        "locality": "Jangid Bhawan",
        "areaName": "MI Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "North Indian"
        ],
        "avgRating": 3.9,
        "deliveryTime": 22,
    },
    {
        "id": "445523",
        "name": "FPF - Coffee Wale Bhaiya",
        "cloudinaryImageId": "bee00361a5f51701f04a67b74877e1f3",
        "locality": "Kailash Vihar",
        "areaName": "Lal Kothi",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Beverages",
            "Fast Food",
            "Italian",
            "Burgers",
            "Snacks",
            "Indian"
        ],
        "avgRating": 4.5,
        "deliveryTime": 23
    },
    {
        "id": "47615",
        "name": "Subway",
        "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
        "locality": "Raja Park",
        "areaName": "Raja Park",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Fast Food",
            "Healthy Food",
            "Salads",
            "Desserts",
            "Beverages",
            "Snacks",
            "Continental",
            "Italian",
            "Italian-American",
            "American"
        ],
        "avgRating": 4.1,
        "deliveryTime": 21,
    },
    {
        "id": "526770",
        "name": "Baalti Bhar ke By Kebabs & Curries Company",
        "cloudinaryImageId": "fqyqepleku4ulsx9pbww",
        "locality": "C Scheme",
        "areaName": "C Scheme",
        "costForTwo": "₹500 for two",
        "cuisines": [
            "Fast Food",
            "North Indian",
            "Indian",
            "Beverages",
            "Lucknowi",
            "Mughlai"
        ],
        "avgRating": 4.1,
        "deliveryTime": 21,
    },
    {
        "id": "648274",
        "name": "Carbon",
        "cloudinaryImageId": "e163346a6a126e1d7afb9ed10348c18b",
        "locality": "Ramesh Marg",
        "areaName": "C Scheme",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Continental",
            "Healthy Food",
            "Beverages"
        ],
        "avgRating": 4,
        "deliveryTime": 22,
    },
    {
        "id": "59295",
        "name": "NBC - Nothing Before Coffee",
        "cloudinaryImageId": "pu9z7d8009qfvixtsi3y",
        "locality": "C Scheme",
        "areaName": "C Scheme",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Indian",
            "Beverages",
            "Juices"
        ],
        "avgRating": 4.4,
        "deliveryTime": 18,
    },
    {
        "id": "70052",
        "name": "Dev Hotel",
        "cloudinaryImageId": "h7pwybih8iopej5ebpux",
        "locality": "Pink CIty",
        "areaName": "Pink City",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "North Indian"
        ],
        "avgRating": 4.4,
        "deliveryTime": 19,
    },
    {
        "id": "54270",
        "name": "Swastik Pavitra Bhojnalya",
        "cloudinaryImageId": "acjd6ucg57cvo4ypqzez",
        "locality": "Adarsh Nagar",
        "areaName": "Adarsh Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Indian",
            "Beverages"
        ],
        "avgRating": 4.3,
        "deliveryTime": 22,
    }
]
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
const RestCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
    } = resData;

    return (
        // <div className="res-card">
        //     <img src={appLogo} />
        //     <h4 className="res-name">Pintu Dabha</h4>
        //     <p>Roti,Vegs,Rice,Dal,Butter Milk
        //         <br></br>
        //         <br></br>
        //         400 Per Two</p>
        //     <div className="rate-time">
        //         <h5>4.0 Stars</h5>
        //         <div><p>25 mins</p></div>
        //     </div>
        // </div>
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img not Loaded" />
            <h3>{name}</h3>
            <div id="cuisines">
                <p>{cuisines.join(', ')}</p>
            </div>
            <div className="rate-time">
                <h4>{avgRating} stars</h4>
                <p>{deliveryTime} minutes</p>
            </div>
            <p>{costForTwo}</p>
        </div>
    );
};


const Body = () => {
    return (
        <div className="body">
            <div className="body-top">
                <div>
                    <p><strong>Address :</strong>Maharani Farm,Jaipur,Rajasthan</p>
                </div>
                <div className="top-ratings-btn">
                    <button>Top Ratings</button>
                </div>
                <div>
                    <input type="text" placeholder="Search..." className="search-bar" />
                </div>
            </div>
            <div className="res-container">
                {/* <RestCard /> */}
                {resList.map((restaurant) => (
                    <RestCard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
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