import React, { useEffect } from 'react';
import '../static/scss/sample.scss';

const Lab = () => {
  useEffect(() => {
    // let box = document.querySelectorAll('.image');
    // let boxBg = [
    //   '#0272a4',
    //   '#f6a564',
    //   '#b6bfc8',
    //   '#36595b',
    //   '#e58e82',
    //   '#6f569f',
    //   '#9b59b6',
    //   '#16a085',
    //   '#2980b9',
    //   '#30336b',
    //   '#6ab04c',
    //   '#535c68',
    //   '#30336b',
    //   '#f8a5c2',
    //   '#c44569',
    //   '#ff9f1a',
    // ];

    // document.body.style.background = `linear-gradient(#b6bfc8, #36595b)`;

    // function ChangeHeight() {
    //   for (let i = 0; i < box.length; i++) {
    //     let RandomBox = Math.floor(Math.random() * 500 + 350);
    //     let RandomBg = boxBg[Math.floor(Math.random() * boxBg.length)];
    //     box[i].style.height = `${RandomBox}px`;
    //     box[i].style.background = RandomBg;
    //   }
    // }
    // ChangeHeight();
    let images = document.querySelectorAll('.image');
    let imgStack = [0, 0];
    let colWidth = 250;

    for (let i = 0; i < images.length; i++) {
      let minIndex = imgStack.indexOf(Math.min.apply(null, imgStack));
      let x = colWidth * minIndex; // 250 * 0 = 0
      let y = imgStack[minIndex]; // 0
      imgStack[minIndex] += images[i].children[0].height + 20;
      // console.log(images[i].children[0].height + 20);
      images[i].style.transform = `translateX(${x}px) translateY(${y}px)`;
      if (i === images.length - 1) {
        document.querySelector('.images').style.height = `${Math.max.apply(
          null,
          imgStack
        )}px`;
      }
    }
  });
  return (
    <>
      <div className='images'>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>0</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>1</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552644867-3c98a63f38eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>2</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552620543-31d952829801?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>3</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552602989-715150494024?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>4</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>0</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>1</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552644867-3c98a63f38eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>2</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552620543-31d952829801?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>3</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552602989-715150494024?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>4</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>0</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552584010-ca8bbbd5bd18?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>1</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552644867-3c98a63f38eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>2</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552620543-31d952829801?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>3</span>
        </div>
        <div className='image'>
          <img
            src='https://images.unsplash.com/photo-1552602989-715150494024?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjYxOTE2fQ'
            alt=''
          />
          <span>4</span>
        </div>
      </div>
    </>
  );
};

export default Lab;
