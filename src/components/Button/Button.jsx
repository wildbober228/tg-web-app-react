import React from 'react';

const Button = (props) => {
    return (
        <button {...props} className={'button ' + props.ClassName}></button>
    );
};

export default Button;
