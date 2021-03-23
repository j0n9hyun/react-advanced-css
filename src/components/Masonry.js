import React, { useEffect } from 'react';
import '../static/scss/masonry.scss';
// import Maple from '../static/image/maple.jpg';
// import Road from '../static/image/spring.jpg';
// import Tree from '../static/image/tree.jpg';

const Masonry = () => {
  useEffect(() => {
    let box = document.querySelectorAll('.item');
    let boxBg = [
      '#0272a4',
      '#f6a564',
      '#b6bfc8',
      '#36595b',
      '#e58e82',
      '#6f569f',
      '#9b59b6',
      '#16a085',
      '#2980b9',
      '#30336b',
      '#6ab04c',
      '#535c68',
      '#30336b',
      '#f8a5c2',
      '#c44569',
      '#ff9f1a',
    ];

    document.body.style.background = `linear-gradient(#b6bfc8, #36595b)`;

    function ChangeHeight() {
      for (let i = 0; i < box.length; i++) {
        let RandomBox = Math.floor(Math.random() * 500 + 350);
        let RandomBg = boxBg[Math.floor(Math.random() * boxBg.length)];
        box[i].style.height = `${RandomBox}px`;
        box[i].style.background = RandomBg;
      }
    }
    ChangeHeight();
    document.querySelectorAll('.item').forEach((item) => {
      item.style.gridRowEnd = `span ${item.clientHeight + 20}`;
    });
    const wrap = document.querySelector('.wrap');
    wrap.style.display = 'grid';
    wrap.style.gridTemplateColumns = 'repeat(auto-fill, 170px)';
    wrap.style.gridAutoRows = '1px';
  });
  return (
    <>
      <div class='wrap'>
        <div class='item'>1</div>
        <div class='item'>2</div>
        <div class='item'>3</div>
        <div class='item'>4</div>
        <div class='item'>5</div>
        <div class='item'>6</div>
        <div class='item'>7</div>
        <div class='item'>8</div>
      </div>
    </>
  );
};

export default Masonry;
