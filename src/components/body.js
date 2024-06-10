import Restcard from "./restaurant_card";
import { resList } from "../utils/demo_data";
import { useState } from "react";

const Body = () => {
    const [listOfRests,setListOfRests] = useState(resList);
    return (
        <div className="body">
            <div className="body-top">
                <div>
                    <p className="address"><strong>Address :</strong>Maharani Farm,Jaipur,Rajasthan</p>
                </div>
                <div className="top-ratings-btn">
                    <button onClick={()=>{
                        const updatedResList = resList.filter((res)=>res.avgRating>4);
                        setListOfRests(updatedResList);
                    }}>Top Ratings</button>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." className="search-bar" />
                </div>
            </div>
            <div className="res-container">
                {/* <RestCard /> */}
                {listOfRests.map((restaurant) => (
                    <Restcard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;