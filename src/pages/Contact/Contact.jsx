import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = {
      name: name,
      phone: phone,
      email: email,
    };
    console.log(message);
    alert(
      `Thank you for reaching out! We will get back to you as soon as possible.`
    );

    navigate(`/`);

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="message-container">
      <form onSubmit={handleSubmit} className="house-container">
        <h1>Leave your message here!</h1>

        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>

        <label className="form-label">
          Phone:
          <input
            className="form-input"
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
          />
        </label>

        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>

        <label className="form-label">
          Message:
          <textarea
            className="form-input"
            type="text"
            name="message"
            cols="60"
            rows="6"
            placeholder="Write your message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
        </label>

        <button className="link-button" type="submit">
          Send Message
        </button>

        <Link to="/" className="link-button">
          Back to Home Page
        </Link>
      </form>
    </div>
  );
}

export default Contact;
