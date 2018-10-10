import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { select } from '../../assets/assets'

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

  press = (e) => {

    const { OrderNumber, SelectOnClick } = this.state;

    if(e.key === "Enter")
      if(OrderNumber !== 0) {
        if(OrderNumber >= 100000 && OrderNumber <= 999999) {
          this.setState({SelectOnClick : !SelectOnClick});
        } else {
          alert('정확한 번호를 입력해주세요.');
        }
      } else {
        alert('주문번호를 입력해주세요.');
      }
  };

  render() {

    const { OrderNumber, SelectOnClick, PerfectionGauge } = this.state;

    return ( 
      <React.Fragment>
        {SelectOnClick === false ?
          <SubmitFrame false>
            <InputText onKeyPress={this.press} onChange={this.handleNumber} type='text' placeholder="주문번호" />
            <SelectImage onClick={() => OrderNumber !== 0 ? OrderNumber >= 100000 && OrderNumber <= 999999 ? this.setState({SelectOnClick : !SelectOnClick}) : alert('정확한 번호를 입력해주세요.') : alert('주문번호를 입력해주세요.')} src={select} alt='돋보기'/>
          </SubmitFrame> :

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

                {/* 동그라미 */}
                <CircleCollection>
                {PerfectionGauge >= 0 ?
                  <CircleLine p0>
                    <Circle />
                  </CircleLine> : 
                  <DelCircleLine p0>
                    <Circle />
                  </DelCircleLine>
                }
                {PerfectionGauge >= 25 ?
                  <CircleLine p25>
                    <Circle />
                  </CircleLine> : 
                  <DelCircleLine p25>
                    <Circle />
                  </DelCircleLine>
                }
                {PerfectionGauge >= 50 ?
                  <CircleLine p50>
                    <Circle />
                  </CircleLine> : 
                  <DelCircleLine p50>
                    <Circle />
                  </DelCircleLine>
                }
                {PerfectionGauge >= 75 ?
                  <CircleLine p75>
                    <Circle />
                  </CircleLine> : 
                  <DelCircleLine p75>
                    <Circle />
                  </DelCircleLine>
                }
                {PerfectionGauge >= 100 ?
                  <CircleLine p100>
                    <Circle />
                  </CircleLine> : 
                  <DelCircleLine p100>
                    <Circle />
                  </DelCircleLine>
                }
                </CircleCollection>
              </Model>
            </Content>

            <div className='filter'></div>

            <Link to='/'>
              <ReturnMain><span style={{display : 'inline-block'}}>메인으로 돌아가기</span></ReturnMain>
            </Link>
          </SubmitFrame>
        }
      </React.Fragment>
      );
  }
}

const SubmitFrame = styled.div`
  width : ${props => {if (props.false) return '993px'; else return '1492px'}};
  height : ${props => {if (props.false) return '70px'; else return '574px'}};
  border-bottom : ${props => {if (props.false) return '#40CD9F 3px solid'; else return 'none'}};
  display : flex;
  flex-direction: ${props => {if (props.false) return 'none'; else return 'column'}};
  align-items : center;
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

const CircleCollection = styled.div`
  width : 900px;
  height : 40px;
  display : flex;
  position : absolute;
`;

const CircleLine = styled.div`
  width : 37px;
  height : 37px;
  border : 3px solid #40CD9F;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  align-items : center;
  position : absolute;
  left : ${props => {
    if(props.p0) return '0%';
    else if(props.p25) return '25%';
    else if(props.p50) return '50%';
    else if(props.p75) return '75%';
    else if(props.p100) return '100%';
    else return 'none';
  }};
`;

const DelCircleLine = CircleLine.extend`
  border : none;
`;

const Circle = styled.div`
  width : 30px;
  height : 30px;
  background-color : #40CD9F;
  border-radius : 60px;
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
`;

export default Select;