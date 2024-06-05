import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/header";
import Body from "./src/components/body"
// import Restcard from "./src/components/restaurant_card"
// import {resList} from "./src/utils/demo_data"
import Footer from "./src/components/footer"                            
// const Footer = () => {
//     return (
//         <div className="footer">
//             <h4>Copyrights owned by me</h4>
//             <h4>email</h4>
//             <h4>Jaipur</h4>
//         </div>
//     );
// };
const Layout = () => (
    <div className="layout">
        <Header />
        <Body />
        <Footer />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("heading"));
root.render(< Layout />);