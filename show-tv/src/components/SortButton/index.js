import React from 'react';
import PropTypes from 'prop-types';

/** Coucou */
export class SortButton extends React.Component {

    render() {
        let {children, order, onClick, actif, ...props } = this.props;

        let fontIcon = order === 'ascending' ? '▲' : '▼';
        let css = 'sortButton' + (actif ? ' actif' : '');

        return (
            <div className={css}>
                <button actif={actif} {...props} onClick={onclick}>{children}</button>
                <button actif={actif} {...props} onClick={onclick}>{fontIcon}</button>
            </div>
        );
    }
}


SortButton.propTypes = {
    actif: PropTypes.bool,
    order: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};


export default SortButton;
