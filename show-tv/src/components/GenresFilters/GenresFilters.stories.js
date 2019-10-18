import React from 'react';
import GenresFilters from './index';
// import './index.css'
import { action } from '@storybook/addon-actions';

export default {
    title: 'components/GenresFilters',
    component: GenresFilters,
}


export const default_value = () => <GenresFilters onChange={action("clicked")} apiKey="c12acbfd62881f685724440e60707f6b" language="fr-FR" />;


