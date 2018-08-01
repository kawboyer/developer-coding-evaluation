import React from 'react';
import image from '../assets/images/pic-gojo.png';
import imageBg from '../assets/images/pic-gojo-bg.png';
import '../css/Gojo.css';

const Gojo = () => (
  <section> 
    <div className="grid-container-gojo">
      <div id="color-background-gojo"></div>
      <img id="image-bg-gojo" src={imageBg} alt="Gojo Background" width="100%" />
      <img id="image-gojo" src={image} alt="Gojo"/>
      <div id="color-background-gojo2"></div>
      <h1 className="title-gojo">
        Gojo
      </h1>
      <p className="subtitle-gojo">
        Internet of Things
      </p>
      <p className="body-gojo">
        Reducing the spread of hospital infections with the Internet of Things.
      </p>
      <button id="button-gojo">Learn More</button>
    </div>
  </section>
);

export default Gojo;