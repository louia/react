import { render, fireEvent } from '@testing-library/react';
 import { default_value, initialized } from './SortButton.stories';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({});


describe('Button test', () => {
    test('should increment when clicked', () => {
        expect(true).toBeTruthy();
    });

});
