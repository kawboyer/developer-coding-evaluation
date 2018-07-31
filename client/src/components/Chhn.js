import React from 'react';
import image from '../assets/images/pic-chhn.png';
import imageBg from '../assets/images/pic-chhn-bg.png';
import '../css/Chhn.css';

const Chhn = () => (
  <section>
    <div className="grid-container-chhn">
      <img className="image-chhn" src={image} />
      <img className="image-bg-chhn" src={imageBg} alt="Christ Hospital Health Network background image" />

      <div className="content-chhn">
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
    </div>
  </section>
);

export default Chhn;