import { render, fireEvent } from '@testing-library/react';
import { default_value, initialized } from './Counter.stories';


describe('Counter interactivity', () => {
    test('should increment when clicked', () => {
        const comp = render(default_value());
        fireEvent.click(comp.getByText('12'));
        expect(comp.getByText('13')).toBeTruthy();
    });
    it('should do nothing when disabled', () => {
        const comp = render(initialized());
        fireEvent.click(comp.getByText('3'));
        expect(comp.getByText('4')).toBeTruthy();
    });
});
