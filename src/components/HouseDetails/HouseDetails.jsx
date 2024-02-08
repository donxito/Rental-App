import house from "../../Data/data.json";
import { Link, useParams } from "react-router-dom";
import {useState} from "react" 
import "./HouseDetails.css";

function HouseDetails() {
  const { houseId } = useParams();

  const [editHouseInfo, setEditHouseInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);


  const houseInfo = house.find((element) => {
    return element.id == houseId;
  });

  // if there isn't details to show, like the new items
  if (!houseInfo) {
    return (
      <div className="house-details">
        <h1>House Not Found</h1>
        <p>The requested house details could not be found.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditHouseInfo({ ...editHouseInfo, [name]: value });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("updating houseinfo...", editHouseInfo);
    setIsEditing(false);
  }


  return (
    <section className="house-details">
      <h1>{houseInfo.name}</h1>

      {houseInfo.picture_url ? (
        <img src={houseInfo.picture_url.url} />
      ) : (
        <img src="https://dummyimage.com/600x400/000/fff" />
      )}

      <h3>Property type: {houseInfo.property_type}</h3>
      <h3>Accommodates: {houseInfo.accommodates}</h3>
      <h3>Bedrooms: {houseInfo.bedrooms}</h3>
      <h3>Rating: {houseInfo.review_scores_rating}</h3>
      <h3>Price: {houseInfo.price} €</h3>

      <p>Description: {houseInfo.description}</p>

      <br />
      <Link className="link-button" to="/">
        Home page
      </Link>


        {/* NEW FIELD FOR EDITING THE DETAILS*/}
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {/* Render input fields for editing */}
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={houseInfo.name}
            onChange={handleInputChange}
          />
          {/* Add more input fields for other details */}
          <button type="submit">Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h1>{houseInfo.name}</h1>
          {/* Render other details */}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}


    </section>

    



  );
}

export default HouseDetails;
