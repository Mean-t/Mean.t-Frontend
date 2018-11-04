import React, { Component } from 'react';
import styled from 'styled-components';
import CheckUsers from '../../components/OrderNumber/CheckUsers';

class Checked extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Container>
        <CheckUsers />
      </Container>
     );
  }
}
 
const Container = styled.div`
  width : 100%;
  height : 964px;
  display : flex;
  justify-content: center;
  align-items : center;
`;

export default Checked;