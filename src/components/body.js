import Restcard from "./restaurant_card";
import { resList } from "../utils/demo_data";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRests,setListOfRests] = useState(resList);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8996829&lng=75.81247139999999&is-seo-homepage-enabled=true&page_type=DESKTOP_W");
        const json = await data.json();
        console.log(json);
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRests(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

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
                    // <Restcard key={restaurant.id} resData={restaurant} />
                    <Restcard key={restaurant?.info?.id} resData={restaurant?.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;