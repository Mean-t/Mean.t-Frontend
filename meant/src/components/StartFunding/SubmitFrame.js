import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MakeFileInput from './FileInput';

class SubmitFrame extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title : null,
      hashTag : null,
      phoneNumber : null,
      goal : null,
      date : null,
      account : null,
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
    console.log('설명1 : ', data);

    this.setState({
      FileDescription1 : data
    })
  };

  FileDescription2_Cover = async (e) => {
    let filelist = e.target.files;
    let file = filelist[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('설명2 : ', data);

    this.setState({
      FileDescription2 : data
    })
  };

  FileDescription3_Cover = async (e) => {
    let filelist = e.target.files;
    let file = filelist[0];

    const data = await this.encodeBase64ImageFile(file);
    console.log('설명3 : ', data);

    this.setState({
      FileDescription3 : data
    })
  };

  isSubmit = () => {
    const { titleFile, coverFile, FileDescription1, FileDescription2, FileDescription3, title, hashTag, phoneNumber, goal, date, account } = this.state;

    if (( titleFile && coverFile && FileDescription1 && FileDescription2 &&
          FileDescription3 && title && hashTag && phoneNumber && goal && date && account ) !== null) 
      return alert('제출이 완료되었습니다.');
    else 
      return alert('항목을 체크해주세요!');
  };

  isHandleTitle = (e) => {
    this.setState({
      title : e.target.value
    })
  };

  isHandleHashTag = (e) => {
    this.setState({
      hashTag : e.target.value
    })
  };

  isHandlePhoneNumber = (e) => {
    this.setState({
      phoneNumber : e.target.value
    })
  };

  isHandleGoal = (e) => {
    this.setState({
      goal : e.target.value
    })
  };

  isHandleDate = (e) => {
    this.setState({
      date : e.target.value
    })
  };

  isHandleAccount = (e) => {
    this.setState({
      account : e.target.value
    })
  };

  render() {

    const { titleFile, coverFile, FileDescription1, FileDescription2, FileDescription3, title, hashTag, phoneNumber, goal, date, account } = this.state;

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

        <DivContainer text>
          <InputText onChange={this.isHandleTitle} type='text' placeholder="제목" />
           
          <InputText onChange={this.isHandleHashTag} type='text' placeholder="해시태그 추가" />
          
          <InputText onChange={this.isHandlePhoneNumber} type='text' placeholder="전화번호" />

          <InputText onChange={this.isHandleGoal} type='text' placeholder="목표 금액" />

          <InputText onChange={this.isHandleDate} type='text' placeholder="목표 기한 yyyy.mm.dd" />

          <InputText onChange={this.isHandleAccount} type='text' placeholder="계좌번호" />
        </DivContainer>

        <MakeFileInput width='100%' inputId='cover_file' inputRef='cover_file' buttonFor='cover_file' handle = {e => this.handleFile_Cover(e)} mode = '+ 커버 이미지 추가' coverFile = {coverFile}/>

        <DivContainer file>
          <MakeFileInput width='30%' inputId='FileDescription1_file' inputRef='FileDescription1_file' buttonFor='FileDescription1_file'  handle = {e => this.FileDescription1_Cover(e)} mode = '+ 설명 이미지1 추가' coverFile = {FileDescription1}/>
          <div className='filter'></div>
          <MakeFileInput width='30%' inputId='FileDescription2_file' inputRef='FileDescription2_file' buttonFor='FileDescription2_file'  handle = {e => this.FileDescription2_Cover(e)} mode = '+ 설명 이미지2 추가' coverFile = {FileDescription2}/>
          <div className='filter'></div>
          <MakeFileInput width='30%' inputId='FileDescription3_file' inputRef='FileDescription3_file' buttonFor='FileDescription3_file'  handle = {e => this.FileDescription3_Cover(e)} mode = '+ 설명 이미지3 추가' coverFile = {FileDescription3}/>
        </DivContainer>

        <TextBlock>
          <TextArea type="text" placeholder="자세한 설명을 써 주시면 디자이너에게 도움이 된답니다!" />
        </TextBlock>

        <div className='filter'></div>

        <Link onClick={this.isSubmit} to={( titleFile && coverFile && FileDescription1 && FileDescription2 &&
                                            FileDescription3 && title && hashTag &&
                                            phoneNumber && goal && date && account ) !== null ? '/' : '/funding/start'}>
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

const DivContainer = styled.div`
  width : ${props => {
    if(props.text) return '994px';
    else if(props.file) return '100%';
  }};
  height : ${props => {
    if(props.text) return '680px';
  }};
  display : ${props => {
    if(props.file) return 'flex';
  }};
  margin-top : ${props => {
    if(props.file) return '40px';
  }};
  margin-bottom : ${props => {
    if(props.text) return '90px';
    else if(props.file) return '70px';
  }};
`;

const InputText = styled.input`
  width : 993px;
  height : 70px;
  margin-bottom : 46px;
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
  border: 5px solid #40CD9F;
  margin-bottom : 32px;
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
  margin-bottom : 32px;
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
    cursor : ${props => {
      if(props.title_img) return 'pointer';
    }};
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