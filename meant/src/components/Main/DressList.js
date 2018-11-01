import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { leftButton, rightButton } from '../../assets/assets';

class DressList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list의 각 숫자마다 axois로 불러온 list배열에 해당하는 값을 부여. (text, index, img) 
      list : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      limitMin : [1, 5, 9, 13, 17],
      limitMax : [4, 8, 12, 16, 20],
      count : 0
     }
  }

  render() { 
    const { list, limitMin, limitMax, count } = this.state;    

    return ( 
      <Container>
        <Title>Meant와 함께 만드는 옷들</Title>

        <div className='filter'></div>

        <BundleList>
          <Arrow onClick={() => (count !== 0 ? this.setState({count : count - 1}) : null)} src={leftButton} art='왼쪽 화살표'/>
          <div className='filter'></div>
          <ListContents>
            {list.map(contents => (
              contents >= limitMin[count] && contents <= limitMax[count] ? <Content state={contents}/> : null
            ))}
          </ListContents>
          <div className='filter'></div>
          <Arrow onClick={() => (count !== 4 ? this.setState({count : count + 1}) : null)} src={rightButton} art='오른쪽 화살표'/>
        </BundleList>

        <div className='filter'></div>

        <Link to='dresslist'>
          <InformationButton>더 살펴보기</InformationButton>
        </Link>
      </Container>
     );
  }
}

const Content = ({state}) => {
  return(
    state !== 4 | 8 | 12 | 16 | 20 ? 
    <ContentContainer true>
      <ContentImage src={leftButton} alt={`${state}번째 사진`} />
      <ContentMessage>
        <ContentText>{state}_오예 18글자 넘으면 ...된다 오예오에오예오예오예</ContentText>
      </ContentMessage>
    </ContentContainer> : 
    <ContentContainer false>
      <ContentImage src={leftButton} alt={`${state}번째 사진`} />
      <ContentMessage>
        <ContentText>{state}_오예 18글자 넘으면 ...된다 오예오에오예오예오예</ContentText>
      </ContentMessage>
    </ContentContainer>
  );
};

const Container = styled.div`
  width : 1600px;
  height : 570px;
  align-self : center;
  display : flex;
  align-items : center;
  flex-direction: column;
`;

const Title = styled.span`
  width : 550px;
  height : 56px;
  font-size : 50px;
  color : black;
`;

const BundleList = styled.div`
  width : 100%;
  height : 330px;
  display : flex;
`;

const ListContents = styled.div`
  width : 1338px;
  height : 330px;
  display : flex;
`;

const Arrow = styled.img`
  width : 37px;
  height : 105px;
  align-self : center;
  cursor : pointer;
`;

const ContentContainer = styled.div`
  width : 282px;
  height : 330px;
  border : 1px solid #40CD9F;
  margin-right : ${props => {
    if (props.true) return '70px';
    else if (props.false) return '0';
  }};
`;

const ContentImage = styled.img`
  width : 252px;
  height : 192px;
  margin : 16px;
`;

const ContentMessage = styled.div`
  width : 252px;
  height : 70px;
  border-top : 1px solid #40CD9F;
  padding : 16px;
`;

const ContentText = styled.span`
  display : inline-block;
  width : 250px;
  height : 67px;
  font-size : 30px;
  color : black;
  overflow: hidden; 
  text-overflow: ellipsis;
  white-space: pre-wrap;
  display:box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
`;

const InformationButton = styled.div`
  width : 572px;
  height : 72px;
  border : 1px solid #6FAF9C;
  border-radius : 60px;
  display : flex;
  justify-content: center;
  color : black;
  font-size : 30px;
  align-items : center;
  transition : 0.3s;
  &:hover {
    color : #FFFFFF;
    background-color : #40CD9F;
  }
`;

export default DressList;