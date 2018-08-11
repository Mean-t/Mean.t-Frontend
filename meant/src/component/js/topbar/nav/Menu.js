import React from 'react';
import '../../../scss/css/menu.css';

const menu = () => {
    return (
        <nav className="menu">
            <ul className="ul">
                <li><a className="menulist" href="/idea">아이디어를 살펴보기</a></li>
                <li><a className="menulist" href="/fund">펀딩들 살펴보기</a></li>
                <li><a className="menulist" href="/user">내 펀딩들</a></li>
                <li><a className="menulist" href="/login">로그인</a></li>
            </ul>
        </nav>
    );
}

export default menu