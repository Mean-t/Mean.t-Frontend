import React from 'react';
import '../../scss/css/menu.css';

const menu = ({menu_state}) => {
    return (
        <nav className={menu_state}>
            <ul className="ul">
                <li className="menulist"><a className="menulist_a" href="/idea">아이디어를 살펴보기</a></li>
                <li className="menulist"><a className="menulist_a" href="/fund">펀딩들 살펴보기</a></li>
                <li className="menulist"><a className="menulist_a" href="/user">내 펀딩들</a></li>
                <li className="menulist"><a className="menulist_a" href="/login">로그인</a></li>
            </ul>
        </nav>
    );
}

export default menu