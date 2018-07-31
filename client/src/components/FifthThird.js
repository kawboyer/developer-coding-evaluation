import React from 'react';
import image from '../assets/images/pic-fifththird.png';
import imageBg from '../assets/images/pic-fifththird-bg.png';
import '../css/FifthThird.css';

const FifthThird = () => (
  <section> 
    <div className="grid-container-fifththird">
      <img className="image-fifththird" src={image} />
      <img className="image-bg-fifththird" src={imageBg} alt="Fifth Third Bank Background Image" />
      <div className="content-fifththird">
        <h2 className="title-fifththird">
          Fifth Third Bank
        </h2>
        <h4 className="subtitle-fifththird">
          Mobile App
        </h4>
        <h4 className="body-fifththird">
          Reimagine what a mobile banking experience should be, focusing on the user rather than the technology.
        </h4>
        <button id="button-fifththird">View App</button>
      </div>
    </div>
  </section>
);

export default FifthThird;