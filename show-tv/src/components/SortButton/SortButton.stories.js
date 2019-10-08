import React from 'react';
import SortButton from './index';
import '../../index.css'

export default {
    title: 'components/SortButton',
    component: SortButton,
}

export const default_value = () => <Button />;
export const initialized = () => <Button actif={false}  children="Button désactivé"/>;
export const actif = () => <Button actif={true}  children="Button activé"/>;
