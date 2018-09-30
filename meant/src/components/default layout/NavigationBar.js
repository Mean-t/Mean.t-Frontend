import React, { Component } from 'react';
import './css/NavigationBar.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Logo, menuButton } from '../../assets/assets';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      onMenu : false
     }
  }
  render() {
    const { onMenu } = this.state;
    return (
      <Container id='NavigationBar'>
        <MenuButton onClick={() => this.setState({onMenu : !onMenu})} src={menuButton} art='메인메뉴버튼' />
        {
          onMenu === false ? null : 
          <MenuContainer>
            <MenuBar>
              <MenuContent><Link onClick={() => this.setState({onMenu : !onMenu})} to='/idaes'>아이디어들 살펴보기</Link></MenuContent>
              <MenuContent><Link onClick={() => this.setState({onMenu : !onMenu})} to='/funding'>펀딩들 살펴보기</Link></MenuContent>
              <MenuContent><Link onClick={() => this.setState({onMenu : !onMenu})} to='/mypage'>내 펀딩들</Link></MenuContent>
              <MenuContent><Link onClick={() => this.setState({onMenu : !onMenu})} to='/login'>로그인</Link></MenuContent>
            </MenuBar>
            <div style={{cursor : 'pointer'}} className='filter' onClick={() => this.setState({onMenu : !onMenu})}></div>
          </MenuContainer>
        }
        <NaviLink>
          <Link to='/login'>펀딩시작하기</Link>
        </NaviLink>

        <div className='filter'></div>

        <Link id='logoButton' to='/'>
          <LogoButton src={Logo} alt="로고버튼"/>
        </Link>

        <div className='filter'></div>

        <NaviLink>
          <Link to='number-founding'>주문번호 조회</Link>
        </NaviLink>
      </Container>
    );
  };
}

const MenuContainer = styled.div`
  width : 100%;
  height : 2146px;
  display : flex;
  position : absolute;
  top : 116px;
  background-color: rgba(8, 8, 8, 53%);
  z-index : 9998;
`;

const MenuBar = styled.div`
  background-color : #FFFFFF;
  width : 440px;
  height : 2145px;
  border-top : solid 1px #707070;
`;

const MenuContent = styled.div`
  width : 270px;
  height : 55px;
  border-left : 6px solid #40CD9F;
  line-height : 50px;
  color : #40CD9F;
  font-size : 30px;
  margin : 25px 30px;
  padding-left : 10px;
`

const Container = styled.div`
  width : 100%;
  height : 116px;
  display : flex;
  font-size : 25px;
`;

const MenuButton = styled.img`
  width : 53px;
  height : 55px;
  align-self: center;
  margin-left : 29px;
  margin-right : 46.4px;
  cursor : pointer;
`;

const NaviLink = styled.span`
  height : 24px;
  text-decoration : none;
  color : black;
  align-self : center;
  margin-right : 73px;
`;

const LogoButton = styled.img`
  width : 157px;
  height : 50px;
  align-self : center;
  position : absolute;
  left : 50%;
  margin-left : -78.5px;
`;

export default NavigationBar;