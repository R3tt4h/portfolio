import './StyleContact.css';
import React from 'react';
import { ContactForm } from '.';


function Contact() {
    return (
        <section id="contact">
            <div className="content-contact reveal">
                <h2>Me contacter</h2>
                <ContactForm/>
            </div>
        </section>
    );
  }
  
  export default Contact;