import React from 'react';
import image from '../assets/images/pic-gojo.png';
import imageBg from '../assets/images/pic-gojo-bg.png';
import '../css/Gojo.css';

const Gojo = () => (
  <div> 
    <img className="image-gojo" src={image} />
    <div id="color-background-gojo">Here</div>
    <img className="image-bg-gojo" src={imageBg} width="100%" />
    <h2 className="title-gojo">
      Gojo
    </h2>
    <h4 className="subtitle-gojo">
      Internet of Things
    </h4>
    <h4 className="body-gojo">
      Reducing the spread of hospital infections with the Internet of Things.
    </h4>
    <button id="button-gojo">Learn More</button>

  </div>
);

export default Gojo;