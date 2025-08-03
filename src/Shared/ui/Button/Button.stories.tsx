import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {Button, ThemeButton, SizeButton} from './Button';
import {ThemeDecorator} from "Shared/config/storybook/ThemeDecorator";
import {Theme} from "App/providers/themeProvider";

const meta = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Text',
        size: SizeButton.M,
    },
    argTypes: {
        size: {
            control: 'radio',
            options: [SizeButton.M, SizeButton.L, SizeButton.XL],
            labels: {
                [SizeButton.M]: 'M',
                [SizeButton.L]: 'L',
                [SizeButton.XL]: 'XL',
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR
    },
};

export const Square: Story = {
    args: {
        children: '<',
        square: true,
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

export const BackgroundLight: Story = {
    args: {
        theme: ThemeButton.BACKGROUND
    },
};

export const BackgroundDark: Story = {
    args: {
        theme: ThemeButton.BACKGROUND
    },
    decorators: [
        (Story) => (ThemeDecorator(Theme.DARK)(Story))
    ]
};
