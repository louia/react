import React from 'react';
import PropTypes from 'prop-types';
// import './index.css'
import 'bulma/css/bulma.css'

/** Bouton permettant de filtrer */
export class GenreFilterButton extends React.Component {

    render() {
        let { type,onChange, children,...props } = this.props;

        let css = 'button ';
        // if(type==='with') css += 'is-success'
        // else if(type==='without') css+= 'is-danger'
        // console.log(type);
        
        return (
            <div className="buttons has-addons">
                <button {...props} className={css + (type==='without'?' is-danger' : '')} onClick={()=> onChange("without")}>-</button>
                <button {...props} className={css+ (type=== null ? 'is-info':'')} onClick={()=> onChange(null)}>{children}</button>
                <button {...props} className={css +  (type==='with'?' is-success' : '')}onClick={()=> onChange("with")}>+</button>
            </div>
        );
    }
}
GenreFilterButton.defaultProps = {
    children: "Filtre",
  };
  

GenreFilterButton.propTypes = {
    children : PropTypes.string,
    /** 'with' ou 'without' ou non défini et spécifie si le filtre est actif est comment */
    type: PropTypes.string,
    /** Boolean qui indique si le filtre est désactivé ou non */
    disabled: PropTypes.bool,
    /**  Fonction (callback) */
    onChange: PropTypes.func,
};


export default GenreFilterButton;
