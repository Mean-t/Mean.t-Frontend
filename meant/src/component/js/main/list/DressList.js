import React from 'react';
import left_arrow from '../../../image/left-arrow.PNG';
import right_arrow from '../../../image/right-arrow.PNG';
import 옷_1 from '../../../image/menu.png'
import 옷_2 from '../../../image/menu.png'
import 옷_3 from '../../../image/menu.png'
import 옷_4 from '../../../image/menu.png'
import '../../../scss/css/dresslist.css';

const DressList = ({list_prev, list_next, fund_text1, dress_number1, fund_text2, dress_number2, fund_text3, dress_number3, fund_text4, dress_number4}) => {
    return (
        <div className="fund-list">
            <ul className="fund-ul">
                <li className="fund-li">
                    <div className="fund-li-img_div">
                        <img className="fund-li-img" src={dress_number1} alt={dress_number1}/>
                    </div>
                    <span className="fund-text">{fund_text1}</span>
                </li>
                <li className="fund-li">
                    <div className="fund-li-img_div">
                        <img className="fund-li-img" src={dress_number2} alt={dress_number2}/>
                    </div>
                    <span className="fund-text">{fund_text2}</span>
                </li>
                <li className="fund-li">
                    <div className="fund-li-img_div">
                        <img className="fund-li-img" src={dress_number3} alt={dress_number3}/>
                    </div>
                    <span className="fund-text">{fund_text3}</span>
                </li>
                <li className="fund-li">
                    <div className="fund-li-img_div">
                        <img className="fund-li-img" src={dress_number4} alt={dress_number4}/>
                    </div>
                    <span className="fund-text">{fund_text4}</span>
                </li>
            </ul>
            <img className="list_arrow_left" onClick={list_prev} src={left_arrow} alt="왼쪽 화살표"/>
            <img className="list_arrow_right" onClick={list_next} src={right_arrow} alt="오른쪽 화살표"/>
        </div>
    );
}

export default DressList;