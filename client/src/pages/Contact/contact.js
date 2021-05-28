import React, { useState } from "react";
// import { validateEmail } from '../../utils/helpers';



// add contact form here
import "./contact.css";
import PageTitle from '../../components/Title';


function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
    return (
      
      <form className="contact-wrapper">
        <PageTitle title="Contact"></PageTitle>
        <div className="contact-container">
          <div className="smaller-container">
            <label>
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
            <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
            
            <button type="submit">{status}</button>
            </div>
            </form>
    );
}



export default Contact;