import React from 'react';
import '../../../scss/css/sendidea.css';
import airplane from '../../../image/airplane.png';

const SendIdea = ({SendIdea}) => {
    return (
        <div onClick={SendIdea} className="send-idea">
            <span className="send-text">당신의 아이디어를 보내보세요</span>
            <div className="send-image">
                <img className="image-airplane" src={airplane} alt="비행기이미지"/>
            </div>
        </div>
    );
}

export default SendIdea;

