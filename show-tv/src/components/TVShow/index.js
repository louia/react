import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import '../../index.css'

/** Une série */
export class TVShow extends React.Component {

    render() {
        return (
                // <div className={"columns"}>
                    <div className={this.props.id + ' box has-image-centered'}>
                        <h1 className="subtitle">{this.props.children}</h1> 
                        <img className="has-image-centered" alt={"Poster de "+ this.props.children} width="185" height="215" src ={"https://image.tmdb.org/t/p/w500" +this.props.url_poster} />
                    </div>
                // </div>
        );
    }
}

TVShow.propTypes = {
    /** Titre de la série */
    children: PropTypes.string,
    /** url vers url poster */
    url_poster : PropTypes.string,
    /** id série */
    id : PropTypes.string,
};


export default TVShow;
