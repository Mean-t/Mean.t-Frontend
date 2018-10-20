import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class SubmitFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      titleFile : {},
      coverfile : {}
     }
  }

  handleFile_Title = (e) => {
    this.setState({titleFile : e.target.files[0]})
  };

  handleFile_Cover = (e) => {
    this.setState({coverFile : e.target.files})
  };

  render() {

    const { titleFile } = this.state;
    // const 

    return(
      <Container>
        <SendButton id='title_file_label' title for="title_file">{titleFile === {} ? '+ 타이틀 이미지 추가' : <img src={titleFile} />}</SendButton>
        <InputFile onClick={e => e.target.value = null} onChange={e => this.handleFile_Title(e)} files={titleFile} accept='image/*' type='file' ref='title_file' id='title_file'></InputFile>
        
        <InputText type='text' placeholder="제목" />
        
        <InputText type='text' placeholder="해시태그 추가" />
        
        <InputText type='text' placeholder="전화번호" />

        <InputText type='text' placeholder="목표 금액" />

        <InputText type='text' placeholder="목표 기한 yyyy.mm.dd" />

        <InputText type='text' placeholder="계좌번호" />

        <SendButton title for="cover_file">+ 커버 이미지 추가</SendButton>
        <InputFile onChange={this.handleFile_File} files={titleFile} accept='image/*' type='file' id='cover_file'></InputFile>
       
       <SendButton onClick={() => console.log(typeof( titleFile))}>실험</SendButton>

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
  margin-top : 100px;
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
  color: #40CD9F; 
  font-size: 22px; 
  line-height: normal; 
  vertical-align: middle; 
  background-color: #FFFFFF;
  cursor: pointer; 
  border: 3px solid #40CD9F; 
  position : relative;
  left : 50%;
  margin-left : -136.5px;
  width : ${props => {
    if(props.title) return '273px';
  }};
  height : ${props => {
    if(props.title) return '273px';
  }}
  justify-content: center;
  align-items : center;
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