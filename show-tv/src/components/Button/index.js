import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
    render() {
        let {actif, children, ...props} = this.props;

        let css = 'monButton';
        if (actif) css += ' actif';

        return <button {...props} className={css}>{this.props.children}</button>
    }
}

Button.propTypes = {
    actif: PropTypes.bool,
};


export default Button;
