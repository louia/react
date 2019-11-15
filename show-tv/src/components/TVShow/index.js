import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import '../../index.css'

/** Une série */
export class TVShow extends React.Component {

    render() {
        let urlPoster;
        this.props.url_poster === null ? urlPoster="https://via.placeholder.com/500x742?text="+encodeURI(this.props.children) : urlPoster="https://image.tmdb.org/t/p/w500" +this.props.url_poster;
        return (
                // <div className={"columns"}>
                    <div className={this.props.id + ' box has-image-centered'}>
                        <h1 className="subtitle">{this.props.children}</h1> 
                        <img className="has-image-centered" alt={"Poster de "+ this.props.children} width="185" height="215" src ={urlPoster} />
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
    id : PropTypes.number,
};


export default TVShow;
