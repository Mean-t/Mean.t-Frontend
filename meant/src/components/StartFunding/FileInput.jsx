import React, {Component} from 'react';
import styled from 'styled-components';

class FileInput extends Component {
  render() {
    return(
      <React.Fragment>
        <SendButton cover for="cover_file">{this.props.coverFile === null ? this.props.mode : '✓ 추가 성공'}</SendButton>
        <InputFile cover_btn onClick={e => e.target.value = null} onChange={this.props.handle} accept='image/*' type='file' ref='cover_file' id='cover_file'></InputFile>
      </React.Fragment>
    );
  }
}

export default FileInput;


const SendButton = styled.label`
  display: inline-flex;
  color: #40CD9F; 
  font-size: 22px; 
  background-color: #FFFFFF;
  cursor: pointer; 
  border: 3px solid #40CD9F; 
  border-radius : 60px;
  width : 100%;
  height : 70px;
  margin-bottom : 40px;
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
      if(props.cover_btn) return 'none';
      else if(props.cover_img) return 'block';
    }};
    opacity : ${props => {
      if(props.cover_btn) return 'none';
      else if(props.cover_img) return '0';
    }};
    position : ${props => {
      if(props.cover_img) return 'absolute';
    }};
    width : ${props => {
      if(props.cover_img) return '100%';
    }}
    height : ${props => {
      if(props.cover_img) return '100%';
    }}
  }
`;