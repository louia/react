import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

/** Bouton permettant de filtrer */
export class GenreFilterButton extends React.Component {

    render() {
        let { type, disabled,onChange, ...props } = this.props;


        return (
            <div className={"parent-filter-button"}>
                <button {...props}>-</button>
                <button {...props}>{this.children}</button>
                <button {...props}>+</button>
            </div>
        );
    }
}


GenreFilterButton.propTypes = {
    /** 'with' ou 'without' ou non défini et spécifie si le filtre est actif est comment */
    type: PropTypes.string,
    /** Boolean qui indique si le filtre est désactivé ou non */
    disabled: PropTypes.bool,
    /**  Fonction (callback) */
    onChange: PropTypes.func,
};


export default GenreFilterButton;
