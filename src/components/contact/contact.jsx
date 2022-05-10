/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <div className="contact-form">
      <div className="a-left-a">
        <div className="a-card-a bg"></div>
        <div className="a-card-a">
          <img className="a-img-a"/>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user" placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button" />
          <div className="blur c-blurl"
          style={{background: "var(--purple)"}}>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;