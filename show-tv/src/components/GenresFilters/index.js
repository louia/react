import React from 'react';
import PropTypes from 'prop-types';
import GenreFiltreButton from '../GenreFiltreButton/index.js';

export class GenresFilters extends React.Component {
    constructor(props) {
        super(props);
        this.getListGenre = this.getListGenre.bind(this);

        this.state = {
            apiKey: 'c12acbfd62881f685724440e60707f6b',
            language: 'fr-FR'
            // onChange : props.onChange
        };
    }

    clickHandle(a, b) {
        console.log(a, b);
    }

    getListGenre() {
        let e=[];
        fetch('https://api.themoviedb.org/3/genre/tv/list?api_key=' + this.state.apiKey + '&language=' + this.state.apiKey)
        .then(function (response) {
            return response.json();
            })
        .then((data)=>{
            console.log(data);
            data.forEach(element => {
                e.push(<GenreFiltreButton ></GenreFiltreButton>)
            });
            
        })
    }


    render() {
        this.getListGenre()
        return (
            <p>hello word</p>
        );
    }
}


export default GenresFilters;
