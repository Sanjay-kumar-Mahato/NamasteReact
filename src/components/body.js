import Restcard from "./restaurant_card";
import { resList } from "../utils/demo_data";
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
                    <Restcard key={restaurant.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;