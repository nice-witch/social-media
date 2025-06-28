import {fireEvent, render, screen} from '@testing-library/react'
import {Sidebar} from "./index";

describe('Sidebar component', () => {
    test('render in screen', () => {
        render(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        render(<Sidebar />);
        fireEvent.click(screen.getByTestId('sidebar-button'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
    });
})
