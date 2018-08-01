import React from 'react';
import appdev from '../assets/icons/icon-appdev.svg';
import ba from '../assets/icons/icon-ba.svg';
import bi from '../assets/icons/icon-bi.svg';
import '../css/Services.css';

const Services = () => (
  <section>
    <div className="grid-container-services">

      <div id="section-1">
        <img id="img-bi" src={bi} alt="Logo for Business Intelligence"/>
        <div>
          <p className="subtitle">Business Intelligence</p>
          <p className="body">We use technologies to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
        </div>
      </div>

      <div id="section-2">
        <img id="img-appdev" src={appdev} alt="Logo for App Development"/>
        <div>
          <p className="subtitle">App Development</p>
          <p className="body body-section-2">Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for iOS, Android.</p>
        </div>
      </div>

      <div id="section-3">
        <img id="img-ba" src={ba} alt="Logo for Business Analysis"/>
        <div>
          <p className="subtitle">Business Analysis</p>
          <p className="body">Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
        </div>
      </div>

    </div>
  </section>
)

export default Services;