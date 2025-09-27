import {fireEvent, screen} from '@testing-library/react';
import {Counter} from "./Counter";
import {RenderComponent} from "Shared/lib/tests/renderComponent/RenderComponent";

describe('Counter component', () => {
    // test('first render', () => {
    //     RenderComponent(<Counter />, {
    //         initialState: {
    //             counter: { value : 5}
    //         }
    //     });
    //     screen.debug(screen.getByTestId('counter'))
    //     expect(screen.getByTestId('counter')).toHaveTextContent('5');
    // });
    //
    // test('increment', () => {
    //     RenderComponent(<Counter />, {
    //         initialState: {
    //             counter: { value : 5}
    //         }
    //     });
    //
    //     fireEvent.click(screen.getByTestId('counter-increment'))
    //     expect(screen.getByTestId('counter-value')).toHaveTextContent('6');
    // });
    //
    // test('decrement', () => {
    //     RenderComponent(<Counter />, {
    //         initialState: {
    //             counter: { value : 5}
    //         }
    //     });
    //
    //     fireEvent.click(screen.getByTestId('counter-decrement'))
    //     expect(screen.getByTestId('counter-value')).toHaveTextContent('4');
    // });
})