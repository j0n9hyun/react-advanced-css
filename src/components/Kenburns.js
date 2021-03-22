import React, { useEffect } from 'react';
import '../static/scss/motion.scss';
import Maple from '../static/image/maple.jpg';
import Road from '../static/image/spring.jpg';
import Tree from '../static/image/tree.jpg';

const Kenburns = () => {
  useEffect(() => {
    let bgArray = [];
    bgArray[0] = ['#0272a4', '#f6a564'];
    bgArray[1] = ['#b6bfc8', '#36595b'];
    bgArray[2] = ['#e58e82', '#6f569f'];
    let pageNum = 0;
    let contentWrap = document.querySelector('.container');
    let imgs = document.querySelectorAll('.coverImg');
    let album = document.querySelectorAll('.album');
    let pointBtnAll = document.querySelectorAll('.pointWrap li');

    function hou() {
      pageNum += 1;
      if (pageNum > 2) {
        pageNum = 0;
      }
      pageChangeFunc();
    }
    setInterval(hou, 3000);

    let totalNum = album.length;
    function pageChangeFunc() {
      contentWrap.style.background = `linear-gradient(${bgArray[pageNum][0]}, ${bgArray[pageNum][1]})`; // 뒷배경
      // test.style.backgroundImage = `url(${Road})`;

      for (var i = 0; i < totalNum; i++) {
        if (pageNum === i) {
          album[i].classList.add('active');
          pointBtnAll[i].classList.add('active');
        } else {
          album[i].classList.remove('active');
          pointBtnAll[i].classList.remove('active');
        }
      }
      imgs[pageNum].style.background = bgArray[pageNum][0];
    }

    for (let i = 0; i < pointBtnAll.length; i++) {
      pointBtnAll[i].addEventListener('click', function () {
        pageNum = i;
        pageChangeFunc();
      });
    }
    pageChangeFunc();
  });
  return (
    <>
      <div className='container'>
        <section className='album'>
          <div className='coverImg'>
            <img src={Maple} alt='' />
          </div>
        </section>
        <section className='album'>
          <div className='coverImg'>
            <img src={Road} alt='' />
          </div>
        </section>
        <section className='album'>
          <div className='coverImg'>
            <img src={Tree} alt='' />
          </div>
        </section>
      </div>
      <ul className='pointWrap'>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

export default Kenburns;
