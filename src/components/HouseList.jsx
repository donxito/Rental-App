import house from "../Data/data.json";

import "./HouseList.css"

import {useState} from 'react';

function HouseList () {

    const newHouseList1 = house.slice(0, 3);
    //const newHouseList2 = house.slice(3, 6);
    //const newHouseList3 = house.slice(7, 9);


    const [housesToDisplay, setHousesToDisplay] = useState(house);

    const deleteButton = (houseInfoId) => {
        const newHouseList = housesToDisplay.filter((houseObject) => {
            return  houseObject.id !== houseInfoId;
        });
        
        setHousesToDisplay(newHouseList);
        
    }






    return (
        <div className="house-list">

        {newHouseList1.map((houseInfo) => {
            return (
               
                <div key={houseInfo.id} className="house-row1">
                <h1>{houseInfo.country}, {houseInfo.city}</h1>
                <h3>{houseInfo.name}</h3>
                <img src={houseInfo.picture_url.url}></img>
                <button onClick={() => {deleteButton(houseInfo.id)}} >Delete</button>

            



                </div>
            )


        })}



        </div>
    )

}

export default HouseList;