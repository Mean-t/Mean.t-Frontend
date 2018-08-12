import React from 'react';
import '../../scss/css/submain.css';

const SubMain = ({sendIdea}) => {
    return (
        <div className="submain">
            <span className="submain_text">Meant와 함께 만들어가는 좀더 나은 옷들</span>
            {sendIdea}
        </div>
    );
}

export default SubMain