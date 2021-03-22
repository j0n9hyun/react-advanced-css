import React, { useEffect } from 'react';
import '../static/scss/randomheight.scss';
const RandomHeight = () => {
  useEffect(() => {
    let box = document.querySelectorAll('.box');
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

    // box[0].style.height = `${test}px`;
    // console.log(Math.floor(Math.random() * 8));
    document.querySelector(
      '.container'
    ).style.background = `linear-gradient(#b6bfc8, #36595b)`;

    function ChangeHeight() {
      for (let i = 0; i < box.length; i++) {
        let RandomBox = Math.floor(Math.random() * 500 + 300);
        let RandomBg = boxBg[Math.floor(Math.random() * boxBg.length)];
        box[i].style.height = `${RandomBox}px`;
        box[i].style.background = RandomBg;
      }
    }
    ChangeHeight();
  });
  return (
    <div className='container'>
      <section className='slice'>
        <div className='box'>1</div>
        <div className='box'>2</div>
        <div className='box'>3</div>
      </section>
      <section className='slice'>
        <div className='box'>4</div>
        <div className='box'>5</div>
        <div className='box'>6</div>
      </section>
      <section className='slice'>
        <div className='box'>7</div>
        <div className='box'>8</div>
        <div className='box'>9</div>
      </section>
      <section className='slice'>
        <div className='box'>10</div>
        <div className='box'>11</div>
        <div className='box'>12</div>
      </section>
    </div>
  );
};

export default RandomHeight;
