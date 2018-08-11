import React from 'react';
import '../scss/css/template.css';

const Template = ({topbar, sidebar}) => {
    return (
        <div className="template">
            {topbar}
            {sidebar}
        </div>
    );
}

export default Template