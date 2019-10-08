import React from 'react';
import Header from './index';
import '../../index.css'

export default {
    title: 'components/Header',
    component: Header,
}

export const default_value = () => <Header />;
export const initialized = () => <Header  title="Bienvenue" subtitle="Sous titre" isMiniature={false}/>;
export const mini = () => <Header title="Bienvenue" subtitle="Sous titre" isMiniature={true}/>;
