
import { Link, useParams } from "react-router-dom";

import house from "../../Data/data.json";

import "./HouseDetails.css";

function HouseDetails() {

  const { houseId } = useParams();

  const houseInfo = house.find((element) => {
    return element.id == houseId;
  });

  // if there isn't details to show, like the new items
  if (!houseInfo) {
    return (
      <div className="house-details">
      <h1>Details Not Found</h1>
      <p>The requested house details could not be found.</p>
      <Link className="link-button" to="/">Home page</Link>
      <Link className="link-button" to="./EditHouse">Edit House Details</Link> 
      </div>
    );
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
      <Link className="link-button" to="/">Home page</Link>
      <Link className="link-button" to="./EditHouse">Edit</Link>

    </section>

    



  );
}

export default HouseDetails;
