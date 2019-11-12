import React from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css'
import TVShow from '../TVShow/index';

/** Une série */
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
            <div>
            {
              splitEvery(listSeries, 3).map(usersChunk => (
                <div className="columns">
                  { usersChunk.map( item => (
                      <div className="column">
                        <TVShow url_poster={item.poster_path} id={item.id}>{item.name}</TVShow>
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
    listSeries: PropTypes.object,
};


export default TVShowList;
