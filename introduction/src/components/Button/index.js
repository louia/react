import React from 'react';
import PropTypes from 'prop-types';

export function Button(props) {
    return (
        <button {...props}><h1>{props.children}</h1></button>
    );
}

export default Button;
