import React from 'react';
import Counter from './index';

export default {
    title: 'components/Counter',
    component: Counter,
}

export const default_value = () => <Counter/>;
export const initialized = () => <Counter value={3}/>;
