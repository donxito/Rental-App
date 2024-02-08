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
  const [housesToDisplay, setHousesToDisplay] = useState(
    houseSchuffeld.slice(0, 16)
  );

  const deleteButton = (element) => {
    const newHouseList = housesToDisplay.filter(
      (houseObject) => houseObject.id !== element
    );
    setHousesToDisplay(newHouseList);
    // addNewHouse(); // Add a new house after deleting one
  };

  // Conditionally render content in the list items.
  const isFamiliar = (accommodates) => {
    return accommodates >= 3;
  };

  const addNewHouse = (newHouse) => {
    // Function for adding a new house, when one is deleted
    // const randomIndex = Math.floor(Math.random() * house.length);
    // const newHouse = house[randomIndex];

    setHousesToDisplay((prevHouses) => [newHouse, ...prevHouses]);
  };

  return (
    <div className="house-list">
      <AddForm onAddNewHouse={addNewHouse} />
      {housesToDisplay.map((houseInfo) => (
        <div key={houseInfo.id} className="house-container">
          <h1>
            {houseInfo.country}, {houseInfo.city}
          </h1>
          <h3>{houseInfo.name}</h3>
          <img src={houseInfo.picture_url.url} alt={houseInfo.name} />

          {houseInfo.review_scores_rating > 90 && <p>High Rating Score</p>}

          {isFamiliar(houseInfo.accommodates) ? (
            <span>Good for families</span>
          ) : (
            <span>Good for couples</span>
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
