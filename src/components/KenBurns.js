import React from 'react';
import styled from 'styled-components';
import Maple from '../static/image/maple.jpg';

// background-size: cover

const Container = styled.div``;

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
