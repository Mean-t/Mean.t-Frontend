import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './css/SubmitFrame.css';
import { sendAirplan } from '../../assets/assets';

const SubmitFrame = () => {  
  return(
    <Container>
      <Contents>
        <MessageContent>Meant와 함께 만들어가는 좀더 나은 옷들</MessageContent>
        <div className='filter'></div>
        <Link id='SendIdeaLink' to={'login'}>
          <SendContent>
            <SendMessage>당신의 아이디어를 보내보세요</SendMessage>
            <div className='filter'></div>
            <SendButton>
              <SendButtonAirplanImage src={sendAirplan} alt='비행기이미지' />
            </SendButton>
          </SendContent>
        </Link>
      </Contents>
    </Container>
  )
};

const Container = styled.div`
  width : 100%;
  height : 432px;
  background-color : #125757;
  display : flex;
`

const Contents = styled.div`
  width : 1012px;
  height : 221px;
  align-self : center;
  position : absolute;
  left : 50%;
  margin-left : -506px;
  display : flex;
  flex-direction: column;
`

const MessageContent = styled.span`
  width : 1012px;
  height : 66px;
  font-size : 59px;
  color : #4EE7CD;
`

const SendContent = styled.div`
  width : 909px;
  height : 101px;
  border : 3px solid #40CD9F;
  align-self : center;
  border-radius : 60px;
  display : flex;
`

const SendMessage = styled.span`
  width : 407px;
  height : 41px;
  font-size : 30px;
  margin-left : 50px;
  align-self : center;
  color : #4EE7CD;
`

const SendButton = styled.div`
  width : 184px;
  height : 101px;
  border : 3px solid #4EE7CD;
  border-radius : 60px;
  margin : -3px;
  display : flex;
  justify-content: center;
`

const SendButtonAirplanImage = styled.img`
  width : 65px;
  height : 65px;
  align-self : center;
`

export default SubmitFrame;