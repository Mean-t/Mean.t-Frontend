import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { loginMessage } from '../../assets/assets';
// import axios from 'axios';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : ''
     }
  }
  render() { 

    const handleEmail = (e) => {
      this.setState({email : e.target.value});
    };
    
    const handlePassword = (e) => {
      this.setState({password : e.target.value});
    };

    const { email, password } = this.state;

    return ( 
      <Wrapper>
        <Form>
          <Title src={loginMessage} alt='Welcome Back!' />

          <div className='filter'></div>

          {/* 로그인 입력 */}
          <LoginContent style={{ marginBottom : '27px'}}>
            <LoginInput pattern='/(\w+)@(\w+)\.(\w+)/' title='이메일을 입력해주세요.' onChange={handleEmail} type="email" placeholder="E-Mail" />
          </LoginContent>

          {/* 비밀번호 입력 */}
          <LoginContent>
            <LoginInput onChange={handlePassword} type="password" placeholder="Password" />
          </LoginContent>

          <div className='filter'></div>
        
          {/* 로그인 버튼 */}
          <Link onClick={() => (email && password !== '') && /(\w+)@(\w+)\.(\w+)/.test(email) ? null : alert('이메일 및 비밀번호를 입력해주세요.') } to={(email && password !== '') && /(\w+)@(\w+)\.(\w+)/.test(email) ? '/' : '/member/login'}>
            <LoginButton>
              <ButtonText>로그인</ButtonText>
            </LoginButton>
          </Link>
        </Form>

        <Check> {/* 회원가입 이동 LINK */}
          <Link style={{color : '#125757', fontSize : '15px'}} to='/member/join_check'>
            처음이신가요? 회원가입하기 >
          </Link>
        </Check>
      </Wrapper>
      );
  }
}

const Wrapper = styled.div`
  width : 835px;
  height : 1128px;
  background-color : #FFFFFF;
  box-shadow: 0px 4px 8px 0px #aaaaaa;
  display : flex;
  flex-direction: column;
  align-items : center;
`;

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Check = styled.span`
  width : 196px;
  height : 17px;
  display : block;
  margin : 19px;
  animation : ${fadein} 0.6s;
`;

const Form = styled.form`
  width : 514px;
  height : 390px;
  margin : 195px 160px;
  margin-bottom : 19px;
  display : flex;
  flex-direction: column;
  align-items : center;
  animation : ${fadein} 0.6s;
`;

const Title = styled.img`
  width : 338px;
  height : 42px;
  margin-top : 18px;
`

const LoginButton = styled.div`
  width : 514px;
  height : 59px;
  border : 2px solid #40CD9F;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  align-items : center;
`

const ButtonText = styled.span`
  display : inline-block;
  color : #125757;
  font-size : 20px;
`

const LoginContent = styled.div`
  width : 513px;
  height : 59px;
  border : 3px solid #125757;
  display : flex;
  justify-content: center;
  align-items : center;
`

const LoginInput = styled.input`
  width : 464px;
  height : 22px;
  color : #125757;
  font-size : 20px;
  text-decoration : none;
  border : none;
  &:focus {
    outline : none;
  }
`

export default LoginComponent;