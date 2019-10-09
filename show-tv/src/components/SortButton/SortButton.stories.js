import React from 'react';
import SortButton from './index';
// import './index.css'

export default {
    title: 'components/SortButton',
    component: SortButton,
}

export const default_value = () => <SortButton disabled={false} actif={false}  children="Tri defalut"/>;
export const initialized = () => <SortButton disabled={false} order={"ascending"} children="Tri activé"/>;
export const disabled = () => <SortButton disabled={true}  children="Tri désactivé"/>;
