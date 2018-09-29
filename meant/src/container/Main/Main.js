import React, { Component } from 'react';
import styled from 'styled-components';
import { SubmitFrame, DressList, DressIdeas } from '../../components/Main/index';

class Main extends Component {
  render() {
    return (
      <Container>
        <SubmitFrame />

        <div className='filter'></div>
        
        <DressList />
        
        <div className='filter'></div>
        
        <DressIdeas />
        
        <div className='filter'></div>
        
        <Footer />
      </Container>
    );
  }
}

const Container = styled.div`
  width : 100%;
  height : 2386px;
  margin : 0;
  padding : 0;
  display : flex;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.div`
  width : 100%;
  height : 240px;
  background-color : #125757;
`;

export default Main;