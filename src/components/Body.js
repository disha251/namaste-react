import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    //local State Variable - Super powerful VRIABLE -   
    //to create super powerful variables we create hooks

//Local state variable 
const [listOfRestaurants, setListOfRestaurant] = useState(resList);

//Normal JS variable
// let listOfRestaurantsJS = [
//     {

//         data: {
//           id: "334475",
//           name: "KFC",
//           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//           costForTwo: 40000,
//           deliveryTime: 36,
//           avgRating: "3.8",
         
//         },
        
//     },
//     {

//         data: {
//           id: "334476",
//           name: "Dominos",
//           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//           costForTwo: 40000,
//           deliveryTime: 36,
//           avgRating: "4.5",
         
//         },
        
//     },
//     {

//         data: {
//           id: "334477",
//           name: "KFC",
//           cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
//           cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
//           costForTwo: 40000,
//           deliveryTime: 36,
//           avgRating: "4.8",
         
//         },
        
//     },
// ];


//whenever a state variable updates, react rerenders this component.
    return (
        <div className="body">
            <div className="Search">
                <input className="search-input" type="text" placeholder="Search for restaurants and food"/>
                <button className="search-btn">Search</button>
            </div>
            <br/>
            <div className="filter">
                <button className="filter-btn"  onMouseOver={() => {
                        console.log("Mouse Over");
                    }}
                     
                    onClick={() => {
                        const filteredList =listOfRestaurants.filter(res => res.data.avgRating > 4);
                        setListOfRestaurant(filteredList);
                        console.log(filteredList);
                    }}>
                Top Rated</button>

                
                {/* <button>Veg Only</button>
                <button>Non Veg Only</button>
                <button>Cost High to Low</button> */}
            </div>
            <div className="res-container">
                {   listOfRestaurants.map(restaurant => (
                        <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                    ))
                }
                    
          </div>
        </div>
    );
};

export default Body;