import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CircleContents from './CircleContents';
import { Link } from 'react-router-dom';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      OrderNumber : 0,
      SelectOnClick : false,
      PerfectionGauge : 0
     }
  }

  handleNumber = (e) => {
    this.setState({OrderNumber : e.target.value});
  };

  render() {
    const { orderNumber } = this.props.match.params;
    const { OrderNumber, PerfectionGauge } = this.state;

    return ( 
      <React.Fragment>
          <SubmitFrame true>
            <Text title>주문 번호</Text>
            <Text number>{OrderNumber}</Text>

            <div className='filter'></div>
          
            <Content>
              <PerfectionTexts>
                <Text p0>대기</Text>
                <Text p25>입금 확인</Text>
                <Text p50>제작 확정</Text>
                <Text p75>제작 완료</Text>
                <Text p100>배송 완료</Text>
              </PerfectionTexts>

              <div className='filter'></div>

              <Model>
                {/* 라인 */}
                <Line />

                {/* 동그라미 컴포넌트 */}
                <CircleContents PerfectionGauge = {PerfectionGauge} />
              </Model>
            </Content>

            <div className='filter'></div>

            <Link to='/'>
              <ReturnMain><span style={{display : 'inline-block'}}>메인으로 돌아가기</span></ReturnMain>
            </Link>
          </SubmitFrame>
      </React.Fragment>
      );
  }
}

const pulse = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`

const fadein = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SubmitFrame = styled.div`
  width : 1492px;
  height : 574px;
  display : flex;
  flex-direction: column;
  align-items : center;
  animation : ${fadein} 0.6s;
`;

const Text = styled.span`
  color : #40CD9F;
  font-size : ${props => {
    if (props.title) return '40px';
    else if (props.number) return '70px';
    else return '30px';
  }};
  position : ${props => {
    if(props.title || props.number) return 'none';
    else return 'absolute';
  }};
  left : ${props => {
    if(props.p0) return '2%';
    else if(props.p25) return '22%';
    else if(props.p50) return '46%';
    else if(props.p75) return '70%';
    else if(props.p100) return '93.5%';
    else return 'none';
  }};
  width : ${props => {
    if(props.p100) return '190px';
    else return 'none';
  }};
`;

const Content = styled.div`
  width : 1492px;
  height : 82px;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
  position : relative;
`;

const PerfectionTexts = styled.div`
  width : 946px;
  height : 34px;
  display : flex;
  position : absolute;
  top : 0%;
`;

const Model = styled.div`
  width : 1492px;
  height : 40px;
  position : relative;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
`;

const Line = styled.div`
  width : 1492px;
  height : 11px;
  border-radius : 60px;
  background-color : #40CD9F;
`;

const ReturnMain = styled.div`
  width : 870px;
  height : 79px;
  display : flex;
  justify-content: center;
  align-items : center;
  font-size : 28px;
  color : #40CD9F;
  border : 3px solid #40CD9F;
  border-radius : 60px;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`;

export default Select;