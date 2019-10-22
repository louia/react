import React from 'react';
import PropTypes from 'prop-types';
import GenreFilterButton from '../GenreFilterButton/index.js';

export class GenresFilters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            error: null,
            listGenres: [],
        };
        this._onFilterChange = this._onFilterChange.bind(this);
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=' + this.props.apiKey + '&language=' + this.props.language)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    listGenres: data.genres.map(({name, id}) => ({
                        id,
                        name,
                        type: null,
                    })),
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

    _onFilterChange(id, type) {
        var copyoflistGenre = [...this.state.listGenres];
        copyoflistGenre.map((item)=>{
            if(item.id===id){
                item.type =type;
            }
        });
        this.setState({
            listGenres : copyoflistGenre
        });
    }

    render() {
        const {  error, isLoaded,listGenres } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
          
            return (
                <ul>
                    {listGenres.map(item => (
                        <li key={item.id} id={item.id}><GenreFilterButton type={item.type} onChange={(type) => this._onFilterChange(item.id, type)}>{item.name}</GenreFilterButton></li>
                    ))}
                </ul>
            );
        }
    }

}

GenresFilters.defaultProps = {
    apiKey: "c12acbfd62881f685724440e60707f6b",
    language : "fr-FR",
  };
  


export default GenresFilters;
