import React from 'react';
import styled from 'styled-components';
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
            <button type="submit" value="Submit" id="button-submit-connect">Submit</button>
          </form>

          {/* <hr> */}

          <div className="contact">
            <p className="subtitle-connect">For inquieres, please contact:</p>
            <p>Tracy Thompson</p>
            <p>tthompson@cardinalsolutions.com</p>
            <p id="contact-phone">704.936.4444</p>

            <p className="subtitle-connect">Come by our office</p>
            <p>222 S. Church St. Suite 500,</p>
            <p>Charlotte, NC 28202</p>
            <img src="../assets/map/map.jpg" alt="Map showing office location" id="map"/>
            <p id="contact-parking">Find parking on our map!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Connect;
