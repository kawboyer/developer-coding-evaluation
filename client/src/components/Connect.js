import React from 'react';
import styled from 'styled-components';
import map from '../assets/map/map.jpg';
import '../css/Connect.css';

const Connect = () => (
  <section>
    <div className="grid-container-connect">
      <div className="color-background-connect">
        <div className="content-connect">
          <h1 className="title-connect">Connect With Us</h1>
          <p className="body-connect">Have a question or just want to chat? Get in touch.</p>

          <form action="">
            <input type="text" placeholder="Name" id="input-name" />
            <input type="text" placeholder="Email" id="input-email" />
            <input type="text" placeholder="Message" id="input-message" />
            <button type="submit" value="Submit" className="button-submit-connect">Submit</button>
          </form>

          {/* <hr> */}

          <div className="content-contact">
            <p className="subtitle-connect">For inquieres, please contact:</p>
            <p>Tracy Thompson</p>
            <p>tthompson@cardinalsolutions.com</p>
            <p id="contact-phone">704.936.4444</p>

            <p className="subtitle-connect-2">Come by our office</p>
            <p>222 S. Church St. Suite 500,</p>
            <p>Charlotte, NC 28202</p>
            <img id="map" src={map} alt="Map showing office location" />
            <p id="contact-parking">Find parking on our map!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Connect;
