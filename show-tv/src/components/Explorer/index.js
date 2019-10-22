import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../Sorting/index.js';
import GenresFilters from '../GenresFilters/index.js';

export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);

        this.state = {};
    }

    clickHandle(a, b) {
        console.log(a, b);
    }


    render() {
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
        return (
            <div>
                <Sorting disabled={false} onChange={this.clickHandle} sorts={sorts}></Sorting>
                <GenresFilters onChange={(a) => console.log(a)} apiKey="c12acbfd62881f685724440e60707f6b" language="fr-FR"></GenresFilters>
            </div>
        );
    }
}


export default Explorer;
