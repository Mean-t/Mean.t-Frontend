import React, { Component } from 'react';
import styled from 'styled-components';
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
            <SelectImage onClick={() => this.setState({SelectOnClick : !SelectOnClick})} src={select} alt='돋보기'/>
          </SubmitFrame> :
          <SubmitFrame true>

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

export default Select;