import React from 'react';
import '../scss/css/template.css';

const Template = ({topbar}) => {
    return (
        <div className="template">
            {topbar}
        </div>
    );
}

export default Template