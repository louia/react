import React from 'react';
import PropTypes from 'prop-types';

export class Button extends React.Component {
    render() {
        if (this.props.actif == true) {
            return (
                <button className="actif">{this.props.children}</button>
            );
        }
        return (
            <button className="inactif" disabled>{this.props.children}</button>
        );
    }
}

Button.propTypes = {
    actif: PropTypes.bool,
};


export default Button;
