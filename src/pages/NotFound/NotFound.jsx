import {Link} from 'react-router-dom';
import img from "../../img/ghost.png"
import './NotFound.css'

function NotFound () {
    return (
        <div className="NotFound">
            <h1>Whoops!</h1>
            <h2>  Page Not Found</h2>
            <img src={img}/>
            <h3>Looks like this page went on vacation</h3>
            <p>Try our <Link to="/" className='homepageLink'>homepage</Link> instead </p>
        </div>
    ) 
}

export default NotFound;