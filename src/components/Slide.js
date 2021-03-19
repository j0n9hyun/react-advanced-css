import React, { useEffect } from 'react';
import '../static/css/slide.scss';
import Maple from '../static/image/maple.jpg';
import Night from '../static/image/night.jpg';
import Tree from '../static/image/tree.jpg';
import Road from '../static/image/spring.jpg';

// let div = (document.getElementById('li1').style.border = '30px solid red');
// div.style.border = '30px solid red';

// console.log(document.getElementsByClassName('slide'));
// document.getElementById('slideshow').getElementsByTagName('img')[0].className = "fx";

const Slide = () => {
  useEffect(() => {
    // let images = document.getElementsByTagName('img');
    // document.getElementById('pos1').checked = true;
    // test.checked = true;
    // let test = document.querySelectorAll('.slider li');
    // let images = test[0].querySelectorAll('img');
    let images = document.getElementsByTagName('img');
    console.log(images);
    let numberOfImages = images.length;
    let i = 0;

    window.setInterval(kenBurns, 5000);

    function kenBurns() {
      if (i === numberOfImages) {
        // 최대 사진 개수(4)까지 오면 다시 0으로 초기화
        console.log('i 인덱스 초기화');
        i = 0;
      }
      images[i].className = 'fx';

      if (i === 0) {
        images[numberOfImages - 2].className = '';
        console.log('0번 입니다람쥐');
      }
      if (i === 1) {
        images[numberOfImages - 1].className = '';
        document.getElementById(`pos${i}`).checked = true;
        console.log('1번 입니다람쥐');
      }
      if (i > 1) {
        images[i - 2].className = '';
        document.getElementById(`pos${i}`).checked = true;
        console.log(`${i}번 입니다람쥐`);
      }
      console.log(i);
      i++;
    }
    kenBurns();
  });

  return (
    <>
      <div className='slide'>
        <input type='radio' name='pos' id='pos1' />
        <input type='radio' name='pos' id='pos2' />
        <input type='radio' name='pos' id='pos3' />
        <input type='radio' name='pos' id='pos4' />
        <ul>
          <li>
            <div className='slider'>
              <img src={Maple} alt='maple' width='100%' />
            </div>
          </li>
          <li>
            <img src={Night} alt='night' width='100%' />
          </li>
          <li>
            <img src={Tree} alt='tree' width='100%' />
          </li>
          <li>
            <img src={Road} alt='road' width='100%' />
          </li>
        </ul>
        <div className='bullet'>
          <label htmlFor='pos1'>1</label>
          <label htmlFor='pos2'>2</label>
          <label htmlFor='pos3'>3</label>
          {/* <label htmlFor='pos4'>4</label> */}
        </div>
      </div>
    </>
  );
};

export default Slide;
