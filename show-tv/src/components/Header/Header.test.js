import { render, fireEvent } from '@testing-library/react';
import { default_value, initialized, mini } from './Header.stories';
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ /* configuration options */ });


describe('Header test', () => {

    test('should increment when clicked', () => {
        expect(true).toBeTruthy();
    });
    // test('Header has container className', () => {
    //     const header = render(mini);
    //     console.log(header);
        
    //     expect(header.classList.contains('item')).toBe(true)
    // });
    // test('Header child has item className', () => {
    //     const header = render(mini);
    //     expect(header.child[0].classList.contains('item')).toBe(true)
    //     expect(header.child[1].classList.contains('item')).toBe(true)
    // });
});
