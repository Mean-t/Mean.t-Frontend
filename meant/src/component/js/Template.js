import React from 'react';
import '../scss/css/template.css';

const Template = ({back_onClick ,background_gray, topbar, sidebar, submain, main, fotter}) => {
    return (
        <div className="template">
            <div onClick={back_onClick} className={background_gray}></div>
            {topbar}
            {sidebar}
            {submain}
            {main}
            {fotter}
            <div className="fotter-bar"></div>
        </div>
    );
}

export default Template