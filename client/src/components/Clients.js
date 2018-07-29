import React from 'react';
import chhn from '../assets/logos/logo-chhn.png';
import chs from '../assets/logos/logo-chs.png';
import fifththird from '../assets/logos/logo-fifththird.png';
import pg from '../assets/logos/logo-p&g.png';
import rackroom from '../assets/logos/logo-rackroom.png';
import skanska from '../assets/logos/logo-skanska.png';
import '../css/Clients.css';

const Clients = () => (
  <section>
    <div className="grid-container-clients">

      <div id="box-1">
        <div className="box-1-title">
          <h3>Our Clients</h3>
        </div>
        <p className="box-1-body">Over the years, our team has had the distinction of working with variety of brands in different industries. Here is a short list of some of the names we have worked with.</p>
      </div>

      <div id="box-2">
        <img src={fifththird} id="img-fifththird" alt="Fifth Third Bank logo" width="250px"/>
      </div>

      <div id="box-3">
        <img src={chhn} id="img-chhn" alt="The Christ Hospital Health Network logo" width="250px"/>
      </div>

      <div id="box-4">
        <img src={chs} id="img-chs" alt="Carolina Healthcare System logo" width="250px"/>
      </div>

      <div id="box-5">
        <img src={skanska} id="img-skanska" alt="Skanska logo" width="250px"/>
      </div>

      <div id="box-6">
        <img src={pg} id="img-pg" alt="P and G logo" width="250px"/>
      </div>

      <div id="box-7">
        <img src={rackroom} id="img-rackroom" alt="Rack Room Shoes logo" width="250px"/>
      </div>
    </div>

    
  </section>
);

export default Clients;