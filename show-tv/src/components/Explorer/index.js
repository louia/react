import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../Sorting/index.js';
import Header from '../Header/index.js';
import GenresFilters from '../GenresFilters/index.js';

export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);

        this.state = {
            isLoaded: false,
            error: null,
            listSeries: [],
        };
    }

    clickHandle(a, b) {
        console.log(a, b);
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + this.props.apiKey + '&language=' + this.props.language)
            .then(response => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    listSeries: data.results,
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


    render() {
        const {  error, isLoaded,listSeries } = this.state;

        let sorts = [
            {
                id: "popularity",
                name: "popularité",
                order: "descending",
            },
            {
                id: "name",
                name: "nom",
                order: "ascending",
            },
            {
                id: "price",
                name: "prix",
                order: "ascending",
            }
        ]

        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    <Header></Header>
                    <Sorting disabled={false} onChange={this.clickHandle} sorts={sorts}></Sorting>
                    <GenresFilters onChange={(a) => console.log(a)} apiKey="c12acbfd62881f685724440e60707f6b" language="fr-FR"></GenresFilters>
                    <p>Chargement...</p>
                </div>
            );
        } else {
            console.log(listSeries);
            return (
                    
                <div>
                    <Header></Header>
                    <Sorting disabled={false} onChange={this.clickHandle} sorts={sorts}></Sorting>
                    <GenresFilters onChange={(a) => console.log(a)} apiKey="c12acbfd62881f685724440e60707f6b" language="fr-FR"></GenresFilters>
                </div>
            );
        }

    }
}

Explorer.defaultProps = {
    apiKey: "c12acbfd62881f685724440e60707f6b",
    language : "fr-FR",
  };


export default Explorer;
