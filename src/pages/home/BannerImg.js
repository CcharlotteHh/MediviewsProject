import React from 'react';


function BannerImg({img}) {
  return (
    <figure className='bannerImg'>
      <img src={img} alt='bannerImg'></img>
    </figure>
  )
}

export default BannerImg
