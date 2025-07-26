import type {Meta, StoryObj} from '@storybook/react-webpack5';
import MainPage from './MainPage';
import {ThemeDecorator} from "Shared/config/storybook/ThemeDecorator";
import {Theme} from "App/providers/themeProvider";

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (ThemeDecorator(Theme.DARK)(Story))
    ]
};

