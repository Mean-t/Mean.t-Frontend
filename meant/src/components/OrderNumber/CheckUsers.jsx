import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { select } from '../../assets/assets';
import { Link } from 'react-router-dom';

class CheckUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      OrderNumber : 0,
     }
  }

  handleNumber = (e) => {
    this.setState({OrderNumber : e.target.value});
  };

  press = (e) => {
    
    //   if(e.key === "Enter")
    //     if(OrderNumber !== 0) {
    //       if(OrderNumber >= 100000 && OrderNumber <= 999999) {
    //         this.setState({ /* 라우터 */ });
    //       } else {
    //         alert('정확한 번호를 입력해주세요.');
    //       }
    //     } else {
    //       alert('주문번호를 입력해주세요.');
    //     }
    };

  render() {
    const { OrderNumber } = this.state;
    return(
      <SubmitFrame>
        <InputText onKeyPress={this.press} onChange={this.handleNumber} type='text' placeholder="주문번호" />
        <Link to={`/order_number/reference/${OrderNumber}`}>
          <SelectImage src={select} alt='돋보기'/>
        </Link>
      </SubmitFrame> 
    );
  }
};

export default CheckUsers;

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% 
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`

const SubmitFrame = styled.div`
  width : 993px;
  height : 70px;
  border-bottom : #40CD9F 3px solid;
  display : flex;
  align-items : center;
  animation : ${pulse} 1s;
`;

const InputText = styled.input`
  width : 938px;
  height : 37px;
  text-decoration : none;
  border : none;
  font-family:'NanumSquareRound';
  font-size : 30px;
  color : #40CD9F;
  &:focus {
    outline : none;
  };
  &::placeholder {
    color: #40CD9F;
    opacity: 1; /* Firefox */
  };
`;

const SelectImage = styled.img`
  width : 52px;
  height : 52px;
  cursor : pointer;
`;