//add contact form here
import React, { useState } from 'react';

// import { useMutation } from '@apollo/react-hooks';

import "./contact.css";
import PageTitle from '../../components/Title';
// import { validateEmail } from "../../utils/helpers";


function Contact() {
  const [status, setStatus] = useState("Submit");
  const [formState, setFormState] = useState({ name: '', email: '', photographer: '', message: '' });
  
const handleChange = (event) => {
  const { name, value } = event.target;

  setFormState({
    ...formState,
    [name]: value,
  });


};

//submit form
const handleFormSubmit = async event => {
  event.preventDefault();

}


  return (
      
    <form className="contact-wrapper" onSubmit={handleFormSubmit}>
      <PageTitle title="Contact"></PageTitle>
      <div className="contact-container">
        <div className="smaller-container">
          <label>
            Your Name:
            <input type="text" name="name" placeholder="Name here..." value={formState.name} onChange={handleChange} />
          </label>
          <label>
              Photographer's name:
            <input type="text" name="photographer" value={formState.photographer} onChange={handleChange} />
          </label>
          <label>
            Message:
            <input type="text" name="message"  value={formState.message} onChange={handleChange}/>
          </label>
          <label>
            Email:
      <input type="email"  name="email" id="email"  value={formState.email} onChange={handleChange} />
      </label>
    </div>
          
          <button type="submit">{status}</button>
          </div>
          </form>
  );
}


export default Contact;