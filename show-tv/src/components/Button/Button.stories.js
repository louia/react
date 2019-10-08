import React from 'react';
import Button from './index';
import '../../index.css'

export default {
    title: 'components/Button',
    component: Button,
}

export const default_value = () => <Button />;
export const initialized = () => <Button actif={false}  children="Button désactivé"/>;
export const actif = () => <Button actif={true}  children="Button activé"/>;
