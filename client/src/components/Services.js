import React from 'react';
import bi from '../assets/icons/icon-bi.svg';
import appdev from '../assets/icons/icon-appdev.svg';
import ba from '../assets/icons/icon-ba.svg';
// import '../css/Grid.css';
import '../css/Services.css';

const Services = () => (
  <body>
    
    <div id="score">
      <div id="score-title">
        <h3>
          <span><img id="img-bi" src={bi} width="20vw"/></span>
          Business Intelligence
        </h3>
      </div>

      <div id="score-body">
        <p>We use technologies to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
      </div> 
    </div>

    <div id="board">
      <div id="board-title">
        <h3>
          <span><img id="img-appdev" src={appdev} width="20vw"/></span>
          App Development
        </h3>
      </div>

      <div id="board-body">
        <p>Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for iOS, Android.</p>
      </div>
    </div>

    <div id="controls">
      <div id="controls-title">
        <h3>
          <span><img id="img-ba" src={ba} width="17vw"/></span>
          Business Analysis
        </h3>
      </div> 

      <div id="controls-body">
        <p>Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
      </div>
    </div>

  </body>
)


// const Services = () => (
//   <body>
//     <main>
//       <div className="section-body">
//         <div className="section-content1">
//           <img id="img-bi" src={bi} width="20vw"/>
//           <h3 className="section1-title">Business Intelligence</h3>
//           <p>We use technologies to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
//         </div> 

//         <div className="section-content2">
//           <img id="img-appdev" src={appdev} width="40vw"/>
//           <h3 id="app-development">App Development</h3>
//           <p>Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for iOS, Android.</p>
//         </div>

//         <div className="section-content3">
//           <img id="img-ba" src={ba} width="40vw"/>
//           <h3 id="business-analysis">Business Analysis</h3>
//           <p>Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
//         </div> 
//       </div>
//     </main>
//   </body>
// );

export default Services;