import {Link} from 'react-router-dom';

import './Contact.css'

function Contact () {
  return (
    <div className="contact">
      <h2>Contact Page</h2>
      <p>Contact page content.</p>
      <p>Try our <Link to="/" className='homepageLink'>homepage</Link></p>
    </div>
  );
}

export default Contact;
