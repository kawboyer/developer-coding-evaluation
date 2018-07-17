import React from 'react';
import image from '../assets/images/pic-chhn.png';
import imageBg from '../assets/images/pic-chhn-bg.png';
import '../css/Chhn.css';

const Chhn = () => (
  <div> 
    <img className="image-chhn" src={image} />
    <img className="image-bg-chhn" src={imageBg} width="100%" />
    <h2 className="title-chhn">
      The Christ Hospital Health Network
    </h2>
    <h4 className="subtitle-chhn">
      Digital Platform
    </h4>
    <h4 className="body-chhn">
      A digital front door to the finest patient experiences.
    </h4>
    <button id="button-chhn">Learn More</button>

  </div>
);

export default Chhn;