import React from 'react';
import styled from 'styled-components';
import Maple from '../static/image/maple.jpg';

const Container = styled.div`
  transform: scale(0.5);
  -webkit-animation-name: test;
  -webkit-animation-duration: 3s;
  animation-name: movingPara;
  animation-duration: 3s;
  @keyframes test {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 0%;
    }
  }
`;

const KenBurns = () => {
  return (
    <Container>
      <div>
        <img src={Maple} alt='maple' width={800} height={600} />
      </div>
    </Container>
  );
};

export default KenBurns;
