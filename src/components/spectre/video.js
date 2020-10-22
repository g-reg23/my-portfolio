import React from 'react';
import video from '../videos/spectrev.mp4';

const SpecVid = () => {
  return(
    <div className='vidDiv'>
      <video className='videoPlayer' controls>

        <source src={video}
            type="video/mp4" />

      </video>
    </div>
  )
}

export default SpecVid
