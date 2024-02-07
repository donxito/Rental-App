/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import person1 from "../../img/person1.png"
import person2 from "../../img/person2.png"
import "./About.css";


function About () {
    return (
      <div className="About">
        <h1>Project Description</h1>
        <p>Welcome to our website "Sei La!" The nº1 platform on the internet to rent<br />
          beautiful feel-at-home-like apartments all over the world! <br />
          Here you can find the most hidden gemns in the main european capitals... <br />
          only one click away from your dream holidays! <br />
        </p>
        <h2>Meet the Team Members</h2>

        <div className="teamMembers">

        <div className="memberOne">
        <img src={person1}/>
        <h3>Amparo Cabezuelo</h3>
        <a href="https://github.com/amcasep">GitHub</a> <br />
        <Link to = '*'>LinkedIn</Link>
        </div>

        <div className="memberTwo">
        <img src={person2}/>
        <h3>Miguel Chito</h3>
        <a href="https://github.com/donxito">GitHub</a> <br />
        <Link to = '*'>LinkedIn</Link>
        </div>

        </div>

      </div>
    );
  }
  
  export default About;
  