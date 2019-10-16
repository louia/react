import React from 'react';
import PropTypes from 'prop-types';
import Sorting from '../Sorting/index.js';

export class Explorer extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandle = this.clickHandle.bind(this);

        this.state = {};
    }

    clickHandle(a,b) {
        console.log(a,b);
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
            <Sorting disabled={false} onChange={this.clickHandle} sorts={sorts} />
        );
    }
}


export default Explorer;
