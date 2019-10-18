import React from 'react';
import PropTypes from 'prop-types';
import GenreFilterButton from '../GenreFilterButton/index.js';

export class GenresFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: null,
            listGenre: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=' + this.props.apiKey + '&language=' + this.props.language)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    listGenre: data.genres,
                    isLoaded: true
                });   
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    onChange(e){
        console.log(e)
    }

    render() {
        const {  error, isLoaded,listGenre } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            listGenre.map(function(entry) {
                entry.type = null;
                return entry;
            });
                 
           
            return (
                <ul>
                    {listGenre.map(item => (
                        <li id={item.id}><GenreFilterButton type={item.type} onChange={this.onChange}>{item.name}</GenreFilterButton></li>
                    ))}
                </ul>
            );
        }
    }

}


export default GenresFilters;
