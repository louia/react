import React from 'react';
import Button from './index';
// import './index.css'

export default {
    title: 'components/Button',
    component: Button,
}

export const default_value = () => <Button>Mon boutton</Button>;
export const test_with_h1 = () => <Button actif={false}><div><h1>Coucou</h1></div></Button>;
export const button_actif = () => <Button actif={true} >Button activé</Button>;
export const button_non_actif = () => <Button className='test' actif={false} >Button désactivé</Button>;
