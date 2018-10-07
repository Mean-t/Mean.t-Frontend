import React, { Component } from 'react';
import styled from 'styled-components';
import SubmitFrame from '../../components/CreateFunding/SubmitFrame';

class CreateFunding extends Component {
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
  height : 1024px;
  display : flex;
  justify-content: center;
  margin-top : 30px;
`;
 
export default CreateFunding;