import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from "Shared/ui/Button/Button";

describe('Button component', () => {
    test('render in screen', () => {
        render(<Button>TEST_TEXT</Button>);
        expect(screen.getByText('TEST_TEXT')).toBeInTheDocument();
    })

    test('add clear class', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST_TEXT</Button>);
        expect(screen.getByText('TEST_TEXT')).toHaveClass('clear');
    })
})
