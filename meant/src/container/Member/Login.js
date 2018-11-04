import React from 'react';
import styled from 'styled-components';
import { LoginComponent } from '../../components/Member/index';

const Login = () => {
  return(
    <Container>
      <LoginComponent>
        
      </LoginComponent>
    </Container>
  );
};

const Container = styled.div`
  width : 100%;
  height : 1244px;
  background-color : #E9E9E9;
  z-index : -1;
  display : flex;
  justify-content: center;
  box-shadow: 0px -1px 22px #aaaaaa;
`;

export default Login;