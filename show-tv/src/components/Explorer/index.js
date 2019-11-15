import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../Sorting/index.js';
import Header from '../Header/index.js';
import GenresFilters from '../GenresFilters/index.js';
import TVShowList from '../TVShowList/index.js';

export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);
        this._onFilterChange = this._onFilterChange.bind(this);

        this.state = {
            isLoaded: false,
            listOfIdsFilterWith : "",
            listOfIdsFilterWithout : "",
            error: null,
            listSeries: [],
            sorts : [
                {
                    id: "vote_average",
                    name: "Vote",
                    order: "descending",
                    active : "0"
                },
                {
                    id: "first_air_date",
                    name: "Date de mise en ligne",
                    order: "descending",
                    active : "0"
                },
                {
                    id: "popularity",
                    name: "Popularité",
                    order: "descending",
                    active : "0"
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
        var search=copyofSorts.find(element => element.id == id);


        if(copyofSorts[0].order=="ascending") copyofSorts[0].id ="vote_average.desc"; else  copyofSorts[0].id ="vote_average.asc"
        if(copyofSorts[1].order=="ascending") copyofSorts[1].id ="first_air_date.desc"; else  copyofSorts[1].id ="first_air_date.asc"
        if(copyofSorts[2].order=="ascending") copyofSorts[2].id ="popularity.desc"; else  copyofSorts[2].id ="popularity.asc"

        this.setState({
            sorts: copyofSorts
        },()=>this.refreshListSeries(this.state.listOfIdsFilterWith,this.state.listOfIdsFilterWithout,search));
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

        this.setState({
            listOfIdsFilterWith : listOfIdsFilterWith,
            listOfIdsFilterWithout : listOfIdsFilterWithout
        },()=>this.refreshListSeries(listOfIdsFilterWith,listOfIdsFilterWithout,this.state.sorts));
    }

    refreshListSeries(w,wo,sort){       

        console.log(sort.id);
        
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + this.props.apiKey + '&language=' + this.props.language +
        '&with_genres='+w + '&without_genres='+wo+'&sort_by='+sort.id)
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
        var renderContent = (
            <>
        <GenresFilters onChange={(a) => this._onFilterChange(a)} apiKey="c12acbfd62881f685724440e60707f6b" language="fr-FR"></GenresFilters>
        <TVShowList listSeries={this.state.listSeries}></TVShowList>
</>
        );

        if (error)
            return <div>Erreur : {error.message}</div>;
        
        return (
            <div>
                <Header title="Bienvenue" subtitle="Recherche de séries"></Header>
                <Sorting disabled={false} onChange={this.clickHandle} sorts={sorts}></Sorting>
               {isLoaded ? renderContent : <p>Chargement...</p>}
                {/* <ul>
                    {listSeries.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul> */}
            </div>
        );
    }
}

Explorer.defaultProps = {
    apiKey: "c12acbfd62881f685724440e60707f6b",
    language : "fr-FR",
  };


export default Explorer;
