import React from 'react';
import image from '../assets/images/pic-chhn.png';
import imageBg from '../assets/images/pic-chhn-bg.png';
import '../css/Chhn.css';

const Chhn = () => (
  <section>
    <div className="grid-container-chhn">
      <img id="image-chhn" src={image} alt="Christ Hospital Health Network image"/>
      <img id="image-bg-chhn" src={imageBg} alt="Christ Hospital Health Network background image" />

      <div className="content-chhn">
        <h1 className="title-chhn">
          The Christ Hospital Health Network
        </h1>
        <p className="subtitle-chhn">
          Digital Platform
        </p>
        <p className="body-chhn">
          A digital front door to the finest patient experiences.
        </p>
        <button className="button-chhn">Learn More</button>
      </div>
    </div>
  </section>
);

export default Chhn;