import React from 'react';
import '../static/css/slide.scss';
import Maple from '../static/image/maple.jpg';
import Road from '../static/image/road.jpg';
import Tree from '../static/image/tree.jpg';
import Night from '../static/image/night.jpg';

const Slide = () => {
  return (
    <div class='slide'>
      <input type='radio' name='pos' id='pos1' />
      <input type='radio' name='pos' id='pos2' />
      <input type='radio' name='pos' id='pos3' />
      <input type='radio' name='pos' id='pos4' />
      <ul>
        <li>
          <div className='test'>
            <img src={Maple} alt='maple' />
          </div>
        </li>

        <li>
          <div className='test'>
            <img src={Road} alt='road' />
          </div>
        </li>
        <li>
          <div className='test'>
            <img src={Tree} alt='tree' />
          </div>
        </li>

        <li>
          <div className='test'>
            <img src={Night} alt='night' />
          </div>
        </li>
      </ul>
      <p class='bullet'>
        <label for='pos1'>1</label>
        <label for='pos2'>2</label>
        <label for='pos3'>3</label>
        <label for='pos4'>4</label>
      </p>
    </div>
  );
};

export default Slide;
