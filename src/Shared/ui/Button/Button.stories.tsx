import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Button, ThemeButton} from './Button';
import {ThemeDecorator} from "Shared/config/storybook/ThemeDecorator";
import {Theme} from "App/providers/themeProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    args: {children: 'Text'}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR
    }
};
export const OutlineLight: Story = {
    args: {
        theme: ThemeButton.OUTLINE
    },
};

export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE
    },
    decorators: [
        (Story) => (ThemeDecorator(Theme.DARK)(Story))
    ]
};
