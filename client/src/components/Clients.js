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
    <div id="clients">
      <h3 className="title-clients">Our Clients</h3>
      <p className="body-clients">Over the years, our team has had the distinction of working with variety of brands in different industries. Here is a short list of some of the names we have worked with.</p>
    </div>
    <div>

    </div>
    <img src={chhn} alt="" width="50vw"/>
  </section>
);

export default Clients;