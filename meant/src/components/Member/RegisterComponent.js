import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { registerMessage } from '../../assets/assets';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : '',
      password : '',
      passwordConfirm : '',
      name : ''
     }
  }
  
  render() { 

    const handleEmail = (e) => {
      this.setState({email : e.target.value});
    };

    const handleName = (e) => {
      this.setState({name : e.target.value});
    };

    const handlePassword = (e) => {
      this.setState({password : e.target.value});
    };

    const handlePasswordConfirm = (e) => {
      this.setState({passwordConfirm : e.target.value});
    };

    const { email, name, password, passwordConfirm } = this.state;
    
    return ( 
      <Wrapper>
        <Form>
          <Title src={registerMessage} alt='Welcome to Mean.t' />

          <div className='filter'></div>

          {/* 이메일 입력 */}
          <RegisterContent>
            <RegisterInput onChange={handleEmail} type="email" placeholder="E-Mail" />
          </RegisterContent>

          {/* 이름 입력 */}
          <RegisterContent>
            <RegisterInput onChange={handleName} type="text" placeholder="Name" />
          </RegisterContent>

          {/* 비밀번호 입력 */}
          <RegisterContent>
            <RegisterInput onChange={handlePassword} type="password" placeholder="Password" />
          </RegisterContent>

          {/* 비밀번호 재 입력 */}
          <RegisterContent>
            <RegisterInput onChange={handlePasswordConfirm} type="password" placeholder="Password Confirm" />
          </RegisterContent>

          <div className='filter'></div>

          {/* 회원가입 버튼 */}
          <Link onClick={() => 
              (password || passwordConfirm !== '') && (password !== passwordConfirm) ? alert('비밀번호가 틀렸습니다.') : 
              (email | password | passwordConfirm === '') || (name === '') ? alert('회원정보를 입력해주세요.') : null } to={(password !== passwordConfirm) || (email | password | passwordConfirm === '') || (name === '') ? '/member/join_check' : '/'}>
            <RegisterButton>
              <ButtonText>가입하기</ButtonText>
            </RegisterButton>
          </Link>
        </Form>
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

const Form = styled.form`
  width : 514px;
  height : 614px;
  margin : 83px 160px;
  display : flex;
  flex-direction: column;
  align-items : center;
  animation : ${fadein} 0.6s;
`;

const Title = styled.img`
  width : 435px;
  height : 46px;
  margin-top : 18px;
`

const RegisterButton = styled.div`
  width : 514px;
  height : 59px;
  border : 2px solid #40CD9F;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  align-items : center;
  color : #125757;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`

const ButtonText = styled.span`
  display : inline-block;
  font-size : 20px;
`

const RegisterContent = styled.div`
  width : 513px;
  height : 59px;
  border : 3px solid #125757;
  display : flex;
  justify-content: center;
  align-items : center;
  margin-bottom : 30px;
`

const RegisterInput = styled.input`
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

export default RegisterComponent;