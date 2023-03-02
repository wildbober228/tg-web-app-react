import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.ClassName}/>
    );
};

export default Button;
