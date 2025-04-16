import {CDN_URL} from "../utils/constants";


const styleCard = {
    backgroundColor: "#f0f0f0",
    borderRadius: "10px",
    padding: "20px 10px",
    margin: "0 0 20px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const RestaurantCard = (props) => {
    const {resData} = props; // this si called destructuring on fly.
    // the above code can be written like const /restaurantCard = ({resName, cuisine}) => { --> here we have destructured it here itself
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime, 
    } = resData?.data; //destructuring the data from resData
    return (
        <div className="res-card" style={styleCard}>
            <img
        className="res-logo"
        alt="res-logo"
        style={{width:"100%", height:"200px"}}
        src=
        {CDN_URL + cloudinaryImageId}
      
       
      />
            <h3>{name}</h3>
             <h4>{cuisines.join(",")}</h4>
            <p>{avgRating}stars</p>
            <p>{costForTwo/100}</p>
            <p>{deliveryTime}minutes</p> 
           
        </div>
    );
};

export default RestaurantCard;