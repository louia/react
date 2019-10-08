import React from 'react';
import PropTypes from 'prop-types';

export class Header extends React.Component {
    render() {
        if (this.props.isMiniature == true) {
            return (
                <header className="mini">
                    <div className="item-header">{this.props.title}</div>
                    <div className="item-header">{this.props.subtitle}</div>
                </header>
            );
        }
        return (
            <header>
                <div className="item-header">{this.props.title}</div>
                <div className="item-header">{this.props.subtitle}</div>
            </header>
        );
    }
}


Header.propTypes = {
    isMiniature: PropTypes.bool,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Element)
    ]),

    subtitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Element)
    ]),
};


export default Header;
