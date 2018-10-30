import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class SubmitFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      Title : null,
      hashTag : null,
      text : null,
      TitleFile : null,
     }
  }

  handleTitle = (e) => {
    this.setState({
      Title : e.target.value
    });
  };
  
  handleHashTag = (e) => {
    this.setState({
      hashTag : e.target.value
    });
  };

  handleText = (e) => {
    this.setState({
      text : e.target.value
    });
  };

  enCodeBase64ImageFile = (image) => {
    return new Promise((resolve, reject) => {
      let leader = new FileReader();
      leader.readAsDataURL(image);
      leader.onload = (e) => resolve(e.target.result);
      leader.onerror = (error) => reject(Error(error));
    });
  };

  handleFile = async (e) => {
    let fileList = e.target.files;
    let file = fileList[0];

    const data = await this.enCodeBase64ImageFile(file);
    console.log('파일 : ', data);

    this.setState({
      TitleFile : data
    });
  };

  isSubmit = () => {
    const { Title, hashTag, text, TitleFile } = this.state;

    if ((Title && hashTag && text && TitleFile) !== null)
      return alert('제출이 완료되었습니다.');
    else
      return alert('항목을 체크해주세요!');
  };
  
  render() {
  const { Title, hashTag, text, TitleFile } = this.state;

    return(
      <Container>
        <InputText onChange={this.handleTitle} type='text' placeholder="제목" />
        
        <InputText onChange={this.handleHashTag} type='text' placeholder="해시태그 추가" />
        
        <SendButton for="ex_file">{TitleFile === null ? '+ 파일 첨부' : '✓ 추가 성공'}</SendButton>
        <InputFile onChange={(e) => this.handleFile(e)} type="file" id="ex_file" /> 
        
        <TextBlock>
          <TextArea onChange={this.handleText} type="text" placeholder="자세한 설명을 써 주시면 디자이너에게 도움이 된답니다!" />
        </TextBlock>

        <Link onClick={this.isSubmit} to={(Title && hashTag && text && TitleFile !== null) ? '/' : '/funding/create_idea'}>
          <ClearButton>제출하기</ClearButton>
        </Link>
      </Container>
    );
  }
};

const Container = styled.div`
  width : 994px;
  height : 1100px;
  display : flex;
  flex-direction: column;
  margin-top : 98px;
`;

const InputText = styled.input`
  width : 993px;
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
  height : 382px;
  border : 3px solid #40CD9F;
  padding : 30px;
  margin-bottom : 62px;
`;

const TextArea = styled.textarea`
  width : 928px;
  height : 322px;
  font-size : 30px;
  color : #40CD9F;
  text-decoration : none;
  border : none;
  font-family:'NanumSquareRound';
  resize: none;
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