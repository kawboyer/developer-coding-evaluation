import React from 'react';
import image from '../assets/images/pic-fifththird.png';
import imageBg from '../assets/images/pic-fifththird-bg.png';
import '../css/FifthThird.css';

const FifthThird = () => (
  <div> 
    <img className="image-5th3rd" src={image} />
    <img className="image-bg-5th3rd" src={imageBg} width="100%" />
    <div className="content">
      <h2 className="title-5th3rd">
        Fifth Third Bank
      </h2>
      <h4 className="subtitle-5th3rd">
        Mobile App
      </h4>
      <h4 className="body-5th3rd">
        Reimagine what a mobile banking experience should be, focusing on the user rather than the tehcnology.
      </h4>
      <button id="button-5th3rd">View App</button>
    </div>
  </div>
);

export default FifthThird;