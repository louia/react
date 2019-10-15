import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
    render() {
        let {actif, children,className, ...props} = this.props;

        let css = className+ ' monButton';
        if (actif) css += ' actif';

        return <button {...props} className={css}>{children}</button>
    }
}

Button.propTypes = {
    actif: PropTypes.bool,
};


export default Button;
