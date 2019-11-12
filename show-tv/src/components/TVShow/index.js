import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'

/** Une série */
export class TVShow extends React.Component {

    render() {
        return (
            <div className={this.props.id + ' box'}>
                <h1 className="title">{this.props.titre}</h1> 
                <img width="185" height="215" src ={"https://image.tmdb.org/t/p/w500" +this.props.url_poster} />
            </div>
        );
    }
}

TVShow.propTypes = {
    /** Titre de la série */
    titre: PropTypes.string,
    /** url vers url poster */
    url_poster : PropTypes.string,
    /** id série */
    id : PropTypes.string,
};


export default TVShow;
