import React from 'react';
import bi from '../assets/icons/icon-bi.svg';
import appdev from '../assets/icons/icon-appdev.svg';
import ba from '../assets/icons/icon-ba.svg';
import '../css/Services.css';

const Services = () => (
  <section>
    <div id="background-services">

      <div className="business-intelligence">
        <img id="img-bi" src={bi} width="50vw"/>
        <h3 id="business-intelligence">Business Intelligence</h3>
        <p>We use technologies to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
      </div> 

      <div className="business-intelligence-2">
        <img id="img-appdev" src={appdev} width="40vw"/>
        <h3 id="app-development">App Development</h3>
        <p>Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for iOS, Android.</p>
      </div>

      <div className="business-intelligence-3">
        <img id="img-ba" src={ba} width="40vw"/>
        <h3 id="business-analysis">Business Analysis</h3>
        <p>Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
      </div> 

    </div>
  </section>
);

export default Services;