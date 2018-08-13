import React from 'react';
import '../../scss/css/main.css';

const main = ({dresslist, Change_contents}) => {
    return (
        <div className="main_contents">
            <span className="main_text">Meant와 함께 만드는 옷들</span>
            {Change_contents}
            <div onClick={dresslist} className="main_more">
                <span className="main_more_text">더 살펴보기</span>
            </div>
        </div>
    );
}

export default main;