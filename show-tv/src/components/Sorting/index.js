import React from 'react';
import PropTypes from 'prop-types';
import SortButton from '../SortButton/index.js';
import './index.css'

/** Bouton permettant de trier */
export class Sorting extends React.Component {

    render() {
        let { sorts, selected, onChange, disabled, ...props } = this.props;

        let buttons = [];
        if (sorts) {
            sorts.forEach(element => {
                buttons.push(<SortButton
                    key={element.id}
                    disabled={disabled}
                    selected={element.id}
                    className={"child-button"}
                    order={element.order}
                    onClick={(order) => {
                        onChange(element.id, element.order)
                    }}>
                    {element.name}
                </SortButton>);
            });

            return (
                <div className={"parent-button"}>
                    {buttons}
                </div>
            );
        }
    }
}

Sorting.propTypes = {
    /** Tableau des tris à afficher */
    sorts: PropTypes.array,
    /** L'identifiant du tri */
    selected: PropTypes.string,
    /** Fonction de rappel au click */
    onChange: PropTypes.func,
    /** Boolean qui indique si le bouton est désactivé ou non */
    disabled: PropTypes.bool,
};


export default Sorting;
