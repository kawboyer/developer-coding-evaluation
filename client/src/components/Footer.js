import React from 'react';
import twitter from '../assets/icons/icon-twitter.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import google from '../assets/icons/icon-g+.svg';
import '../css/Footer.css';

const Footer = () => (
  <footer>
    <div class="content">
      <div>
        <div className="copyright">&copy; 2016 Cardinal Solutions. All rights reserved.</div>
      </div>
      <div id="logo">
        <img id="logo-twitter" src={twitter} alt="Twitter Logo" width="20px"/>
        <img id="logo-facebook" src={facebook} alt="Facebook Logo" width="10px"/>
        <img id="logo-google" src={google} alt="Google Plus Logo" width="20px"/>
      </div>
    </div>
  </footer>
);

export default Footer;