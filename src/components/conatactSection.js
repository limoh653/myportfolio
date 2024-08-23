import React from "react";

import './contactSection.css'; // Import your CSS file

const ContactSection = () => {
    return (
      <div id="Contacts">
        <h2>Contact Me</h2>
        <div className="contact-links">
          {/* WhatsApp Logo and Link */}
          <a
            href="https://wa.me/+2540740559541"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
          {/* Gmail Logo and Link */}
          <a
            href="mailto:limohesbon7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
              alt="Gmail"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
          {/* GitHub Logo and Link */}
          <a
            href="https://github.com/limoh653"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              style={{ width: '40px', height: '40px' }}
            />
          </a>
        </div>
      </div>
    );
  };
  
  export default ContactSection;
  


