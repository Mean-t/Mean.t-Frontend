import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MakeFileInput from './FileInput';

class SubmitFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      titleFile : null,
      coverFile : null,
      FileDescription1 : null,
      FileDescription2 : null,
      FileDescription3 : null,
     }
  }

encodeBase64ImageFile = (image) => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (error) => reject(Error(error));
  });
};

  handleFile_Title = async (e) => {
    let fileList = e.target.files;
    let file = fileList[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('타이틀 : ', data);

    this.setState({
      titleFile : data
    });

    document.getElementById('TitleFile').value = data;
  };

  handleFile_Cover = async (e) => {
    let filelist = e.target.files;
    let file = filelist[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('커버 : ', data);

    this.setState({
      coverFile : data
    })
  };
  
  FileDescription1_Cover = async (e) => {
    let filelist = e.target.files;
    let file = filelist[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('커버 : ', data);

    this.setState({
      FileDescription1 : data
    })
  };

  FileDescription2_Cover = async (e) => {
    let filelist = e.target.files;
    let file = filelist[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('커버 : ', data);

    this.setState({
      FileDescription1 : data
    })
  };

  FileDescription3_Cover = async (e) => {
    let filelist = e.target.files;
    let file = filelist[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('커버 : ', data);

    this.setState({
      FileDescription1 : data
    })
  };

  render() {

    const { titleFile, coverFile, FileDescription1, FileDescription2, FileDescription3 } = this.state;

    return(
      <Container>
        {titleFile === null ?
          <SendButton title id='title_file_label' for="title_file">+ 타이틀 이미지 추가</SendButton> :
          <ImageContainer style={{backgroundImage:{titleFile}}} >
            <ImageText>이미지 변경</ImageText>
            <img alt='파일이미지' src={titleFile} width='273px' height='273px' id='TitleFile' title for='title_file' />
            <InputFile title_img onClick={e => e.target.value = null} onChange={e => this.handleFile_Title(e)} accept='image/*' type='file' ref='title_file' id='title_file' />
          </ImageContainer>
        }
        <InputFile title_btn onClick={e => e.target.value = null} onChange={e => this.handleFile_Title(e)} accept='image/*' type='file' ref='title_file' id='title_file' />

        <div style={{marginBottom : '90px', width : '994px', height : '798px'}}>
          <InputText type='text' placeholder="제목" />
           
          <InputText type='text' placeholder="해시태그 추가" />
          
          <InputText type='text' placeholder="전화번호" />

          <InputText type='text' placeholder="목표 금액" />

          <InputText type='text' placeholder="목표 기한 yyyy.mm.dd" />

          <InputText type='text' placeholder="계좌번호" />
        </div>

        <MakeFileInput handle = {e => this.handleFile_Cover(e)} mode = '+ 커버 이미지 추가' coverFile = {coverFile}/>

        <MakeFileInput handle = {e => this.FileDescription1_Cover(e)} mode = '+ 설명 이미지1 추가' coverFile = {FileDescription1}/>
        <MakeFileInput handle = {e => this.FileDescription2_Cover(e)} mode = '+ 설명 이미지2 추가' coverFile = {FileDescription2}/>
        <MakeFileInput handle = {e => this.FileDescription3_Cover(e)} mode = '+ 설명 이미지3 추가' coverFile = {FileDescription3}/>

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
  height : 2008px;
  display : flex;
  flex-direction: column;
  align-items: center;
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

const ImageContainer = styled.div`
  position : relative;
  width : 273px;
  height : 273px;
  border: 3px solid #40CD9F;
  transition : 0.3s;
  display : flex;
  justify-content : center;
  align-items : center;
  color : transparent;
  &:hover {
    opacity : 0.6;
    color : #FFFFFF;
  }
`;

const ImageText = styled.span`
  display : inline-block;
  font-size : 22px;
  position : absolute;
`;

const SendButton = styled.label`
  display: inline-flex;
  color: #40CD9F; 
  font-size: 22px; 
  background-color: #FFFFFF;
  cursor: pointer; 
  border: 3px solid #40CD9F; 
  border-radius : ${props => {
    if(props.cover) return '60px';
  }};
  width : ${props => {
    if(props.title) return '273px';
    else if(props.cover) return '100%';
  }};
  height : ${props => {
    if(props.title) return '273px';
    else if(props.cover) return '70px';
  }};
  justify-content : center;
  align-items : center;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`;

const InputFile = styled.input`
  &[type="file"] {
    display:${props => {
      if(props.title_btn) return 'none';
      else if(props.cover_btn) return 'none';
      else if(props.title_img) return 'block';
      else if(props.cover_img) return 'block';
    }};
    opacity : ${props => {
      if(props.title_btn) return 'none';
      else if(props.title_img) return '0';
    }};
    position : ${props => {
      if(props.title_img) return 'absolute';
    }};
    width : ${props => {
      if(props.title_img) return '100%';
    }}
    height : ${props => {
      if(props.title_img) return '100%';
    }}
  }
`;

const TextBlock = styled.div`
  width : 928px;
  height : 382px;
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