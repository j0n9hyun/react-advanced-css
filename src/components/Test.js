import React, { useEffect } from 'react';
import Maple from '../static/image/maple.jpg';
import Night from '../static/image/night.jpg';
import Tree from '../static/image/tree.jpg';
import Road from '../static/image/road.jpg';
import '../static/css/slide.scss';

const Test = () => {
  useEffect(() => {
    // console.log(document.getElementsByClassName('slider'));
    let images = document.getElementsByTagName('img'),
      numberOfImages = images.length,
      i = 0;
    console.log(numberOfImages);
    window.setInterval(kenBurns, 1000);
    function kenBurns() {
      if (i === numberOfImages) {
        i = 0;
      }
      images[i].className = 'fx';

      if (i === 0) {
        images[numberOfImages - 2].className = '';
      }
      if (i === 1) {
        images[numberOfImages - 1].className = '';
      }
      if (i > 1) {
        images[i - 2].className = '';
      }
      i++;
    }
    kenBurns();
  });
  return (
    <>
      <div className='slider'>
        <img src={Maple} alt='maple' width='100%' />
        <img src={Night} alt='night' width='100%' />
        <img src={Tree} alt='tree' width='100%' />
        <img src={Road} alt='road' width='100%' />
      </div>
    </>
  );
};

export default Test;
