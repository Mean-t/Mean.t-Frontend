import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class DressIdeas extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list : []
     }
  }
  render() { 
    return ( 
      <Container>
        <Title>지금까지 나온 아이디어들</Title>
        
        <div className='filter'></div>
        
        <ListIdeas>
          {}
        </ListIdeas>
        
        <div className='filter'></div>

        <Link to='dressideas'>
          <InformationButton>더 살펴보기</InformationButton>
        </Link>
      </Container>
     );
  }
}

const Container = styled.div`
  width : 813px;
  height : 628px;
  display : flex;
  align-items : center;
  align-self : center;
  flex-direction: column;
`;

const Title = styled.span`
  width : 526px;
  height : 56px;
  color : black;
  font-size : 50px;
`;

const ListIdeas = styled.div`
  width : 813px;
  height : 388px;
  border : 1px solid black;
`

const InformationButton = styled.div`
  width : 572px;
  height : 72px;
  border : 1px solid #6FAF9C;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  color : black
  font-size : 30px;
  align-items : center;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`;

export default DressIdeas;