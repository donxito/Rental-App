import house from "../../Data/data.json";
import "./HouseList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import AddForm from "../Form/Form";

let houseSchuffeld = [];

// shuffle the array to get random house to show
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
houseSchuffeld = shuffle(house);

function HouseList() {

  const [housesToDisplay, setHousesToDisplay] = useState (houseSchuffeld);
  

  const deleteButton = (element) => {
    const newHouseList = housesToDisplay.filter(
      (houseObject) => houseObject.id !== element
    );
    setHousesToDisplay(newHouseList);

  };

  // Conditionally render content in the list items.
  const isFamiliar = (accommodates) => {
    return accommodates > 3;
  };

  // add new house
  const addNewHouse = (newHouse) => {
    setHousesToDisplay((prevHouses) => [newHouse, ...prevHouses]);
  };


  return (
    <div className="house-list">
      <AddForm AddNewHouse={addNewHouse} />
      {housesToDisplay.map((houseInfo) => (
        <div key={houseInfo.id} className="house-container">
          <h1>
           {houseInfo.city}
          </h1>
          <h2>
          {houseInfo.country}
          </h2>
          <h3>{houseInfo.name}</h3>

          {houseInfo.review_scores_rating > 90 && <span className="rating">High Rating Score</span>}
          
          {/* conditional render image if it's from the user list(picture_url) or data base (picture_url.url) */}

          {typeof houseInfo.picture_url === "object" 
          ? (
            <img src={houseInfo.picture_url.url}  alt={houseInfo.name} /> 
          ) : (
            <img src={houseInfo.picture_url}  alt={houseInfo.name} />
            )   } 

          {isFamiliar(houseInfo.accommodates) ? (
            <span className="badge">Good for families</span>
          ) : (
            <span></span>
          )}

          <Link className="link-button" to={`/house/${houseInfo.id}`}>
            More Details
          </Link>

          <button onClick={() => deleteButton(houseInfo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default HouseList;
