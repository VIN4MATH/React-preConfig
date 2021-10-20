import React from 'react';
import './Button.css';

function Button(props) {

    const { variant = 'primary', children, ...rest } = props
    return (
        <button className={`button ${variant}`} {...rest} onclick ={() => {}}  >
            { children }
        </button >
    )
}
export default Button;