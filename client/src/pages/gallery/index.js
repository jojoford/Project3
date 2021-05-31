import React from 'react';
import "./gallery.css";
import kimsbaby from '../../assets/all/kimsbaby.jpg';
import KimsBlackandWhite from '../../assets/all/KimsBlackandWhite.jpg';
import Nashvilleweddingjames from '../../assets/all/Nashvilleweddingjames.jpg';
import kimslandscape from '../../assets/all/kimslandscape.jpg';
import katiezero from '../../assets/blackAndWhite/0-minmin.jpg';
import katiepzero from '../../assets/Portraits/katiepzero-minmin.jpg';
import katiepfour from '../../assets/Portraits/katiep4-minmin.jpg';
import katiepfive from '../../assets/Portraits/katiep5-minmin.jpg';
import NVskyline from '../../assets/all/NVskyline.jpg';
import tnlandscape from '../../assets/all/tnlanscapejames.jpg';

function Gallery(){
    return(
 <div className="row">
    <h2> Kim's Gallery</h2>
    <div className="coloumn">
    
    <img src={kimsbaby} alt="baby"></img>
    <img src={KimsBlackandWhite} alt="couple"></img>
    <img src={kimslandscape} alt="couple and the sky"></img> 
    
    </div>
     
       <div className="row">
    <h1>Shop James  </h1>
    <div className="coloumn">
    
    <img src={Nashvilleweddingjames} alt="wedding"></img>
    <img src={NVskyline} alt="nashville skyline"></img>
    <img src={tnlandscape} alt="greenery"></img>
    </div></div>

     <div className="row">
     <h1> Katie's Gallery </h1>
     <div className="coloumn">
    
     <img src={katiepzero} alt="family and a dog"></img>
     <img src={katiepfour} alt="baby"></img>
     <img src={katiepfive} alt="kids at a wedding"></img>
      <img src={katiezero} alt="couple laughing"></img></div>
  </div>
  </div>
    
  
    
    );
}

export default  Gallery;