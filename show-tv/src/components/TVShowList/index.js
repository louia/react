import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import TVShow from '../TVShow/index';

/** Une liste de séries */
export class TVShowList extends React.Component {

    render() {
        const { listSeries } = this.props;
        const splitEvery = (array, length) =>
            array.reduce(
                (result, item, index) => {
                    if ( index % length === 0 ) result.push([])
                            result[Math.floor(index / length)].push(item)
                    return result
                    },[]
            )
        return (
            <div className={"section"}>
            {
              splitEvery(listSeries, 3).map(usersChunk => (
                <div className="columns">
                  { usersChunk.map( item => (
                      <div className="column" key={parseInt(item.id,10)}>
                        <TVShow url_poster={item.poster_path} key={parseInt(item.id,10)} id={parseInt(item.id,10)}>{item.name}</TVShow>
                      </div>
                  ))
                  }
                </div>
              )
              )}
            </div> 
        );
    }
}

TVShowList.propTypes = {
    /** Liste de séries à afficher */
    listSeries: PropTypes.array,
};


export default TVShowList;
