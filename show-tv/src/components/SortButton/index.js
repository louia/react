import React from 'react';
import PropTypes from 'prop-types';

/** Bouton permettant de trier */
export class SortButton extends React.Component {

    render() {
        let {children, order, onClick, actif, className, ...props } = this.props;

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
    /** Boolean qui indique si le bouton est actif ou non */
    actif: PropTypes.bool,
    /** String qui indique l'ordre croissant ou décroissant */
    order: PropTypes.string,
    /** Boolean qui indique si le bouton est désactivé ou non */
    disabled: PropTypes.bool,
    /** Fonction de rappel au click */
    onClick: PropTypes.func,
};


export default SortButton;
