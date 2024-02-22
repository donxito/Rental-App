/* eslint-disable react/prop-types */

import { useState } from "react";

import "./Form.css";

function AddForm(props) {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newApartment = {
      id: Math.floor(Math.random() * 1000) + 1,
      country: country,
      city: city,
      name: name,
      property_type: type,
      picture_url: image,
      price: price,
      accommodates: capacity,
    };



    console.log(newApartment);

    props.AddNewHouse(newApartment);

    // clear the form fields
    setCountry("");
    setCity("");
    setName("");
    setType("");
    setImage("");
    setPrice(0);
    setCapacity(0);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="house-container">
        <h1>Add your apartment here!</h1>

        <label className="form-label">
          Country:
          <input
            required
            className="form-input"
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
          <input
            required
            className="form-input"
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
          <input
            className="form-input"
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
          Type:
          <select
            required
            className="form-input"
            name="type"
            value={type}
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="Apartment">Apartment</option>
            <option value="Loft">Loft</option>
            <option value="House">House</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="form-label">
          Capacity:
          <input
            className="form-input"
            name="capacity"
            type="number"
            placeholder="Capacity"
            min="1"
            value={capacity}
            onChange={(event) => {
              setCapacity(event.target.value);
            }}
          />
        </label>

        <label className="form-label">
          Price:
          <input
            className="form-input"
            name="price"
            type="number"
            min="1"
            max="9999"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </label>

        <label className="form-label">
          Image:
          <input
            className="form-input"
            type="url"
            name="image"
            placeholder="Enter URL"
            value={image}
            onChange={(event) => {
              setImage(event.target.value);
            }}
          />
        </label>

        <button className="link-button" type="submit">
          Add Apartment
        </button>
      </form>
    </div>
  );
}

export default AddForm;
