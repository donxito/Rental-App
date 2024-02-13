import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import house from "../../Data/data.json";
import "./EditHouse.css";

function EditHouse() {
  const { houseId } = useParams();

  const [houseInfo, setHouseInfo] = useState(
    house.find((element) => element.id === houseId)
  );

  const [editHouseInfo, setEditHouseInfo] = useState({ ...houseInfo });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (event && event.target) {
      // Check if event and event.target are defined
      const { name, value } = event.target;
      setEditHouseInfo({ ...editHouseInfo, [name]: value });
      saveDataToLocal({ ...editHouseInfo, [name]: value }); // Save updated data to local storage
    }
  };

  const saveDataToLocal = (data) => {
    // Convert data to JSON string and save it to local storage
    localStorage.setItem(`house${houseId}`, JSON.stringify(data));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHouseInfo({ ...editHouseInfo });
    console.log("Updated house information:", editHouseInfo);
    alert("changes saved");
    navigate(`/`);
  };

  return (
    <div className="edit-container">
      <div className="house-container">
        <form onSubmit={handleSubmit}>
          <h2>Edit your apartment here!</h2>
          <label className="form-label">
            Neighbourhood:
            <input
              className="form-input"
              type="text"
              name="neighbourhood"
              placeholder="Enter the neighbourhood"
              value={editHouseInfo.neighbourhood}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Room type:
            <input
              className="form-input"
              type="text"
              name="room_type"
              placeholder="Enter room type"
              value={editHouseInfo.room_type}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Accommodates:
            <input
              className="form-input"
              type="number"
              name="accommodates"
              placeholder="How many persons?"
              value={editHouseInfo.accommodates}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Bathrooms:
            <input
              className="form-input"
              type="number"
              name="bathrooms"
              placeholder="How many bathrooms?"
              value={editHouseInfo.bathrooms}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Bedrooms:
            <input
              className="form-input"
              type="number"
              name="bedrooms"
              placeholder="How many bedrooms?"
              value={editHouseInfo.bedrooms}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-label">
            Beds:
            <input
              className="form-input"
              type="number"
              name="beds"
              placeholder="How many beds?"
              value={editHouseInfo.beds}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
          <Link className="link-button" to={`/house/${houseId}`}>
            Back
          </Link>
          <Link className="link-button" to="/">
            Home page
          </Link>
        </form>
      </div>
    </div>
  );
}

export default EditHouse;
