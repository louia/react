import React from 'react';
import Sorting from './index';
// import './index.css'
import { action } from '@storybook/addon-actions';

export default {
    title: 'components/Sorting',
    component: Sorting,
}

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

export const default_value = () => <Sorting disabled={false} onChange={action('clicked')} sorts={sorts} />;
export const sorting_disabled = () => <Sorting disabled={true} sorts={sorts}/>;

