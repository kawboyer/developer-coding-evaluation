import React from 'react';
import bi from '../assets/icons/icon-bi.svg';
import appdev from '../assets/icons/icon-appdev.svg';
import ba from '../assets/icons/icon-ba.svg';
// import '../css/Grid.css';
import '../css/Services.css';

const Services = () => (
  <section>
    <div className="grid-container-services">

      <div id="section-1">
        <img id="img-bi" src={bi} alt="Logo for Business Intelligence"/>
        <div>
          <h3 id="section-1-title">Business Intelligence</h3>
          <p className="section">We use technologies to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
        </div>
      </div>

      <div id="section-2">
        <img id="img-appdev" src={appdev} alt="Logo for App Development"/>
        <div>
          <h3 id="section-2-title">App Development</h3>
          <p className="section">Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for iOS, Android.</p>
        </div>
      </div>

      <div id="section-3">
        <img id="img-ba" src={ba} alt="Logo for Business Analysis"/>
        <div>
          <h3 id="section-3-title">Business Analysis</h3>
          <p className="section">Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services;