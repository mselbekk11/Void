import React from "react";
import  "./void.css"
import HeroImage from '../../assets/img/void-logo.png';
// import VideoImage from '../../assets/img/video-image.png';
// import courseOne from '../../assets/img/blockchain2.png';
// import courseTwo from '../../assets/img/Constellation-Logo-3.png';

function Void(){
    return (
        <div id="void">
            <div className="message">
            <img src={HeroImage} alt="metamask logo"></img>
            <h2>Coming soon</h2>
            </div>
        </div>
      );
}

export default Void;