import React from 'react';
import Header from './index';
import './index.css'

export default {
    title: 'components/Header',
    component: Header,
}

export const default_value = () => <Header />;
export const initialized = () => <Header  title="Bienvenue" subtitle="Sous titre" isMiniature={false}/>;
export const MINI = () => <Header title="Bienvenue" subtitle="Sous titre" isMiniature={true}/>;
export const DOM = () => <Header title={<p>Bienvenue</p>} subtitle={<p>Sous titre</p>} isMiniature={true}/>;
