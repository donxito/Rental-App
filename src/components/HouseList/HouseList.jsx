import house from "../../Data/data.json";
import "./HouseList.css";
import { useState } from 'react';

function HouseList() {
    const [housesToDisplay, setHousesToDisplay] = useState(house.slice(0, 16));

    const deleteButton = (houseInfoId) => {
        console.log("Deleting the button...", houseInfoId);
        const newHouseList = housesToDisplay.filter((houseObject) => houseObject.id !== houseInfoId);
        setHousesToDisplay(newHouseList);
        addNewHouse(); // Add a new house after deleting one
    };

    // Conditionally render content in the list items. 
    const isFamiliar = (accommodates) => {
        return accommodates >= 3;
    };

    const addNewHouse = () => {
        // Function for adding a new house, when one is deleted
        const randomIndex = Math.floor(Math.random() * house.length);
        const newHouse = house[randomIndex];
        setHousesToDisplay(prevHouses => [...prevHouses, newHouse]);
    };

    return (
        <div className="house-list">
            {housesToDisplay.map((houseInfo) => (
                <div key={houseInfo.id} className="house-row1">
                    <h1>{houseInfo.country}, {houseInfo.city}</h1>
                    <h3>{houseInfo.name}</h3>
                    <img src={houseInfo.picture_url.url} alt={houseInfo.name} />
                   
                    {houseInfo.review_scores_rating > 90 && <p>High Rating Score</p>}
                   
                    {isFamiliar(houseInfo.accommodates) ? <span>Good for families</span> : <span>Good for couples</span>}
                   
                    <button onClick={() => deleteButton(houseInfo.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default HouseList;
