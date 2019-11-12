import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../Sorting/index.js';
import Header from '../Header/index.js';
import GenresFilters from '../GenresFilters/index.js';

export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this._onFilterChange = this._onFilterChange.bind(this);

        this.state = {
            isLoaded: false,
            error: null,
            listSeries: [],
            sorts : [
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
        };
    }

    clickHandle(id, order) {
        var copyofSorts= [...this.state.sorts];
        copyofSorts.map((item) => {
            if (item.id === id) {
                if(order === 'descending') item.order = 'ascending';
                else item.order='descending';
            }
        });    
        this.setState({
            sorts: copyofSorts
        });
    }

    _onFilterChange(filters){
        var listOfIdsFilterWith = filters.filter((item) => {
            if(item.type==='with') return item.id
        });
        listOfIdsFilterWith = listOfIdsFilterWith.map(item => item.id)

        var listOfIdsFilterWithout = filters.filter((item) => {
            if(item.type==='without') return item.id
        });
        listOfIdsFilterWithout = listOfIdsFilterWithout.map(item => item.id)

        this.refreshListSeries(listOfIdsFilterWith,listOfIdsFilterWithout);
        
    }

    refreshListSeries(w,wo){                
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + this.props.apiKey + '&language=' + this.props.language + '&with_genres='+w + '&without_genres='+wo)
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
        const {  error, isLoaded,listSeries,sorts } = this.state;
        var renderContent = <GenresFilters onChange={(a) => this._onFilterChange(a)} apiKey="c12acbfd62881f685724440e60707f6b" language="fr-FR"></GenresFilters>;   

        if (error)
            return <div>Erreur : {error.message}</div>;
        
        return (
            <div>
                <Header title="Bienvenue" subtitle="Recherche de séries"></Header>
                <Sorting disabled={false} onChange={this.clickHandle} sorts={sorts}></Sorting>
               {isLoaded ? renderContent : <p>Chargement...</p>}
            </div>
        );
    }
}

Explorer.defaultProps = {
    apiKey: "c12acbfd62881f685724440e60707f6b",
    language : "fr-FR",
  };


export default Explorer;
