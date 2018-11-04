import React, { Component } from 'react';
import styled from 'styled-components';
import Select from '../../components/OrderNumber/Select';

class OrderNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return ( 
      <Container>
        <Select />
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

export default OrderNumber;