import React from 'react';
import "./gallery.css";
import kimsbaby from '../../assets/all/kimsbaby.jpg';
import KimsBlackandWhite from '../../assets/all/KimsBlackandWhite.jpg';
import Nashvilleweddingjames from '../../assets/all/Nashvilleweddingjames.jpg';

function Gallery(){
    return(
 <div className="row">
  <div className="column">
    <img src={kimsbaby}></img>
    <img src={KimsBlackandWhite}></img>
    <img src={Nashvilleweddingjames}></img>
    </div>
    </div>
    );
}

export default  Gallery;