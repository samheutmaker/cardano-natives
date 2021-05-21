import * as React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled';
import IndexLayout from '../layouts/index';

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #4cb9bc;
  font-family: 'Pacifico', cursive;
  overflow: hidden;
`;

const Circle = styled.div`
  height: 700px;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 20px solid white;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    height: 360px;
    width: 360px;
    border: 8px solid white;
  }
`;

const Text = styled.div`
  font-size: 80px;
  font-weight: 400;
  color: white;
  margin-bottom: 16px;
  font-family: 'Pacifico', cursive;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Small = styled.div`
  font-size: 32px;
  font-weight: 400;
  color: white;
  font-family: 'Pacifico', cursive;
`;

const IndexPage = () => (
  <IndexLayout>
    <Container>
      <Circle>
        <Text>Cardano Natives</Text>
        <Small>Coming June 2021</Small>
      </Circle>
    </Container>
  </IndexLayout>
)

export default IndexPage
