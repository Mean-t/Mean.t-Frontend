import React from 'react';
import '../../scss/css/fotter.css';

const Fotter = ({more_idea, idea_list}) => {
    return (
        <div className="fotter_contents">
            <span className="fotter-text">지금까지 나온 아이디어들</span>
            {idea_list}
            <div onClick={more_idea} className="fotter_more">
                <span className="fotter_more_text">더 살펴보기</span>
            </div>
        </div>
    );
}

export default Fotter;