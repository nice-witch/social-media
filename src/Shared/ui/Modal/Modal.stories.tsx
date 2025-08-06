import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Modal} from './Modal';
import {ThemeDecorator} from "Shared/config/storybook/ThemeDecorator";
import {Theme} from "App/providers/themeProvider";

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: <p>Modal</p>,
        isOpen: true,
        onClose: () => {}
    }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [
        (Story) => (ThemeDecorator(Theme.DARK)(Story))
    ]
};

