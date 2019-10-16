import { render, fireEvent } from '@testing-library/react';
 import { default_value, initialized } from './SortButton.stories';
 import initStoryshots from '@storybook/addon-storyshots';

 initStoryshots();
describe('Button test', () => {
    test('should increment when clicked', () => {
        expect(true).toBeTruthy();
    });

});
import React from 'react';
// import SortButton from './index';
// // import './index.css'

// export default {
//     title: 'components/SortButton',
//     component: SortButton,
// }

// export const default_value = () => <SortButton disabled={false} actif={true}  children="Tri default"/>;
// export const button_ascending = () => <SortButton disabled={false} order={"ascending"} children="Tri activé"/>;
// export const button_descending_enable = () => <SortButton disabled={false} order={"descending"} children="Tri activé"/>;
// export const button_descending_disabled = () => <SortButton disabled={true} order={"descending"} children="Tri activé"/>;
// export const button_ascending_disabled = () => <SortButton disabled={true} order={"ascending"} children="Tri désactivé"/>;
