import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { select } from '../../assets/assets'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      OrderNumber : '',
      SelectOnClick : false
     }
  }
  render() { 

    const handleNumber = (e) => {
      this.setState({OrderNumber : e.target.value});
    };

    const { OrderNumber, SelectOnClick } = this.state;

    return ( 
      <React.Fragment>
        {SelectOnClick === false ?
          <SubmitFrame false>
            <InputText onChange={handleNumber} type='text' placeholder="주문번호" />
            <SelectImage onClick={() => OrderNumber !== '' ? this.setState({SelectOnClick : !SelectOnClick}) : alert('주문번호를 입력해주세요.')} src={select} alt='돋보기'/>
          </SubmitFrame> :

          <SubmitFrame true>
            <Text title>주문 번호</Text>
            <Text number>{OrderNumber}</Text>

            <div className='filter'></div>
          
            <Content>

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
  }}
`;

const Content = styled.div`
  width : 1492px;
  height : 82px;
  border : 1px solid black;
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