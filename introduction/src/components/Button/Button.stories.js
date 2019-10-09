import React from 'react';
import Button from './index';
import '../../index.css'

export default {
    title: 'components/Button',
    component: Button,
}

export const default_value = () => <Button />;
export const Button_with_text_children = () => <Button>Mon Bouton</Button>;
export const Button_disabled = () => <Button disabled>Mon Bouton</Button>;
export const Button_with_style_props = () => <Button style={{color: 'blue', backgroundColor: 'pink', fontSize: '2rem', padding: '2rem'}}>Mon Bouton</Button>;
export const Button_with_node_children = () => <Button><h1>Mon Bouton en h1</h1></Button>;
