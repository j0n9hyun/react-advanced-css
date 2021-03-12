import React from 'react';
import '../static/css/slide.scss';
const Slide = () => {
  return (
    <div class='slide'>
      <input type='radio' name='pos' id='pos1' />
      <input type='radio' name='pos' id='pos2' />
      <input type='radio' name='pos' id='pos3' />
      <input type='radio' name='pos' id='pos4' />
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
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