 import React from 'react';
// import { validateEmail } from '../../utils/helpers';



// add contact form here
import "./contact.css";
import PageTitle from '../../components/Title';


function Contact() {
    return (
      <div className="contact-wrapper">
        <PageTitle title="Contact"></PageTitle>
        <div className="contact-container">
          <div className="smaller-container">
            <form url="https://docs.google.com/forms/d/e/1FAIpQLSd2CJ2zsYwSF6ndw23-v6rt_ZNfU3GneBPI1J-lA8RgZgscNw/viewform?embedded=true"
              width="1500px"
              height="753px"
              id="forms"
              className="myClassname"
              display="initial"
              position="relative" ><label>
              Your Name:
              <input type="text" name="name" />
            </label>
            <label>
                Photographer's name:
              <input type="text" name="photographer" />
            </label>
            <label>
              Message:
              <input type="text" name="message" />
            </label>
            <label>
              number/email:
              <input type="text" name="number" />
            </label>
            <input type="submit" value="Submit" />
              </form>
          </div>
        </div>
      </div>
    );
}



export default Contact;