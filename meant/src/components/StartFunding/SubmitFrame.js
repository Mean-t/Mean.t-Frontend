import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class SubmitFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      file : {}
     }
  }
  render() {
  const handleFile = (e) => {
    this.setState({file : e.target.file})
  };

    return(
      <Container>
        <InputText type='text' placeholder="제목" />
        
        <InputText type='text' placeholder="해시태그 추가" />
        
        <InputText type='text' placeholder="전화번호" />

        <InputText type='text' placeholder="목표 금액" />

        <InputText type='text' placeholder="목표 기한 yyyy.mm.dd" />

        <InputText type='text' placeholder="계좌번호" />

        <SendButton for="ex_file">+ 파일 첨부</SendButton>
        <InputFile onChange={handleFile} type="file" id="ex_file" /> 
        
        <TextBlock>
          <TextArea type="text" placeholder="자세한 설명을 써 주시면 디자이너에게 도움이 된답니다!" />
        </TextBlock>

        <div className='filter'></div>

        <Link onClick={() => alert('제출이 완료되었습니다.')} to='/'>
          <ClearButton>제출하기</ClearButton>
        </Link>
      </Container>
    );
  }
};

const Container = styled.div`
  width : 998px;
  height : 1575px;
  display : flex;
  flex-direction: column;
`;

const InputText = styled.input`
  widht : 993px;
  height : 70px;
  margin-bottom : 76px;
  text-decoration : none;
  border : none;
  border-bottom : 3px solid #40CD9F;
  font-family:'NanumSquareRound';
  font-size : 30px;
  color : #40CD9F;
  &:focus {
    outline : none;
  }
  &::placeholder {
    color: #40CD9F;
    opacity: 1; /* Firefox */
  }
`;

const SendButton = styled.label`
  display: inline-flex;
  padding: 17px 28px; 
  color: #40CD9F; 
  font-size: 30px; 
  line-height: normal; 
  vertical-align: middle; 
  background-color: #FFFFFF;
  cursor: pointer; 
  border: 3px solid #40CD9F; 
  border-radius: 60px;
  width : 168px;
  justify-content: center;
  align-items : center;
  margin-bottom : 54px;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`;

const InputFile = styled.input`
  &[type="file"] {
    position: absolute; 
    width: 1px; 
    height: 1px; 
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip:rect(0,0,0,0); 
    border: 0;
  }
`;

const TextBlock = styled.div`
  width : 928px;
  heigth : 382px;
  border : 3px solid #40CD9F;
  padding : 30px;
`;

const TextArea = styled.textarea`
  width : 928px;
  height : 322px;
  font-size : 30px;
  color : #40CD9F;
  text-decoration : none;
  border : none;
  font-family:'NanumSquareRound';
  &:focus {
    outline : none;
  }
  &::placeholder {
    color: #40CD9F;
    opacity: 1; /* Firefox */
  }
`;

const ClearButton = styled.div`
  width : 988px;
  height : 67px;
  border : 3px solid #40CD9F;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  align-items : center;
  color : #40CD9F;
  font-size : 30px;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`;

export default SubmitFrame;