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
        <div id="section-1-title">
          <h3>
            <span><img id="img-bi" src={bi} width="10%" alt="Logo for Business Intelligence"/></span>
            Business Intelligence
          </h3>
        </div>
        <div id="section-1-body">
          <p>We use technologies to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
        </div> 
      </div>

      <div id="section-2">
        <div id="section-2-title">
          <h3>
            <span><img id="img-appdev" src={appdev} width="10%" alt="Logo for App Development"/></span>
            App Development
          </h3>
        </div>
        <div id="section-2-body">
          <p>Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for iOS, Android.</p>
        </div>
      </div>

      <div id="section-3">
        <div id="section-3-title">
          <h3>
            <span><img id="img-ba" src={ba} width="8%" alt="Logo for Business Analysis"/></span>
            Business Analysis
          </h3>
        </div> 
        <div id="section-3-body">
          <p>Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Services;