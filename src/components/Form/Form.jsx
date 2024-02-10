/* eslint-disable react/prop-types */
import { useState } from "react";

import "./Form.css";


function AddForm(props) {


  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApartment = {
        id: Math.floor(Math.random() * 1000) + 1,
        country: country,
        city: city,
        name: name,
        picture_url: image,
    };

    alert("apartment submited");

 
    props.AddNewHouse(newApartment);
    
    
    // clear the form fields
    setCountry("");
    setCity("");
    setName("");
    setImage("");
  };

  return (
   
    <form onSubmit={handleSubmit} className="house-container">
      <h1>Add your apartment here!</h1>

      <label className="form-label">
        Country: 
        <input className="form-input"
          type="text"
          name="country"
          placeholder="Enter Country"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
      </label>

      <label className="form-label">
        City: 
        <input className="form-input"
          type="text"
          name="city"
          placeholder="Enter City"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
      </label>

      <label className="form-label">
        Name:
        <input className="form-input"
          type="text"
          name="name"
          placeholder="Short description"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </label>

      <label className="form-label">
        Image
        <input className="form-input"
          type="url"
          name="image"
          placeholder="Enter url"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        />
      </label>

      <button className="link-button" type="submit">Add Apartment</button>
    </form>

  );
}

export default AddForm;
