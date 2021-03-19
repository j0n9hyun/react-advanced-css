import React from 'react';
import '../static/css/main.scss';

const Home = () => {
  return (
    <div className='container'>
      <input id='tab1' type='radio' name='tabs' />
      <label htmlFor='tab1'>메뉴1</label>

      <input id='tab2' type='radio' name='tabs' />
      <label htmlFor='tab2'>메뉴2</label>

      <div className='content1'>
        <p>first</p>
      </div>

      <div className='content2'>
        <p>second</p>
      </div>
    </div>
  );
};

export default Home;
