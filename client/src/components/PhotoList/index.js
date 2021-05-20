import React from 'react'

import photo from '../../assets/landscapes/coverImage.jpg';


function PhotoList() {
  return (
    <div>
        <img
          src={photo}
          alt="Landscape Example"
        />
    </div>
  )
}

export default PhotoList;