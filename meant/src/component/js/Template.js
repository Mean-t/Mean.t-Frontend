import React from 'react';
import '../scss/css/template.css';

const Template = ({topbar, sidebar, submain}) => {
    return (
        <div className="template">
            {topbar}
            {sidebar}
            {submain}
        </div>
    );
}

export default Template