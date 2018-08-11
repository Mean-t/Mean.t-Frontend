import React from 'react';
import '../../scss/css/topbar.css';
import Menuicon from '../../image/menu.png';
import Mainrogo from '../../image/rogo.png';

const Topbar = ({Menu_onClick, Rogo_onClick, Topbar_text1, Topbar_text2}) => {
    return (
            <header className="top_bar">
                <img className="menuicon" src={Menuicon} alt="Menu_Icon" onClick={Menu_onClick} />
                <span className="start_fund" onClick={Topbar_text1}>펀딩 시작하기</span>
                <img className="mainrogo" src={Mainrogo} alt="MainRogo" onClick={Rogo_onClick}/>
                <span className="lookupnumber" onClick={Topbar_text2}>주문번호 조회</span>
            </header>
    );
}

export default Topbar;