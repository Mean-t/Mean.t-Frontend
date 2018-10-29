import React, { Component } from 'react';
import styled from 'styled-components';
import SubmitFrame from '../../components/StartFunding/SubmitFrame';

class StartFunding extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Container>
        <SubmitFrame />
      </Container>
     );
  }
}

const Container = styled.div`
  width : 100%;
  height : 2372px;
  display : flex;
  justify-content: center;
  align-items : center;
`;
 
export default StartFunding;