import React from 'react';
import SortButton from './index';
// import './index.css'

export default {
    title: 'components/SortButton',
    component: SortButton,
}

export const default_value = () => <SortButton disabled={false} actif={true}>Tri default</SortButton>;
export const button_ascending = () => <SortButton disabled={false} order={"ascending"} >Tri activé</SortButton>;
export const button_descending_enable = () => <SortButton disabled={false} order={"descending"} >Tri activé</SortButton>;
export const button_descending_disabled = () => <SortButton disabled={true} order={"descending"}>Tri activé</SortButton>;
export const button_ascending_disabled = () => <SortButton disabled={true} order={"ascending"} >Tri désactivé</SortButton>;
