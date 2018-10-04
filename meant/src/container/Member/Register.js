import React from 'react';
import styled from 'styled-components';
import { RegisterComponent } from '../../components/Member/index';

const Register = () => {
  return(
    <Container>
      <RegisterComponent>
              
      </RegisterComponent>
    </Container>
  );
};

const Container = styled.div`
  width : 100%:
  height : 1244px;
  background-color : #E9E9E9;
  z-index : -1;
  display : flex;
  justify-content: center;
  box-shadow: 0px -1px 22px #aaaaaa;
`;
export default Register;