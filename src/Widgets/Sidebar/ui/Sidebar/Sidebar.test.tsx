import {fireEvent, screen} from '@testing-library/react';
import {Sidebar} from "./Sidebar";
import {RenderComponent} from "Shared/lib/tests/renderComponent/RenderComponent";

describe('Sidebar component', () => {
    test('render in screen', () => {
        RenderComponent(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        RenderComponent(<Sidebar />);
        fireEvent.click(screen.getByTestId('sidebar-button'));
        expect(screen.getByTestId('sidebar')).toHaveClass('collapse');
    });
})
