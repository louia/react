import React from 'react';
import GenreFilterButton from './index';
import './index.css'
import { action } from '@storybook/addon-actions';

export default {
    title: 'components/GenreFilterButton',
    component: GenreFilterButton,
}


export const default_value = () => <GenreFilterButton disabled={false} onChange={action('clicked')}/>;
export const GenreFilterButton_disabled_with = () => <GenreFilterButton disabled={true} type="with" onChange={action('clicked')}><p>Filtre 1</p></GenreFilterButton>;
export const GenreFilterButton_disabled_without = () => <GenreFilterButton disabled={true} type="without" onChange={action('clicked')}><p>Filtre 1</p></GenreFilterButton>;
export const GenreFilterButton_disabled_null = () => <GenreFilterButton disabled={true} type={null} onChange={action('clicked')}><p>Filtre 1</p></GenreFilterButton>;
export const GenreFilterButton_enaled_without = () => <GenreFilterButton disabled={false} type="without" onChange={action('clicked')}><p>Filtre 1</p></GenreFilterButton>;
export const GenreFilterButton_enaled_with = () => <GenreFilterButton disabled={false} type="with" onChange={action('clicked')}><p>Filtre 1</p></GenreFilterButton>;
export const GenreFilterButton_enaled_null = () => <GenreFilterButton disabled={false} type={null} onChange={action('clicked')}><p>Filtre 1</p></GenreFilterButton>;