const Restcard = (props) => {
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
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img not Loaded" />
            <h3 className="res-name">{name}</h3>
            <div id="cuisines">
                <p>{cuisines.join(', ')}</p>
            </div>
            <div className="rate-time">
                <h4 className="rating">{avgRating} stars</h4>
                <p className="dev-time">{deliveryTime} mins</p>
            </div>
            <p className="price">{costForTwo}</p>
        </div>
    );
};

export default Restcard;