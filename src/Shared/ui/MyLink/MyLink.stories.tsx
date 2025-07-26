import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {MyLink, ThemeLink} from './MyLink';
import {ThemeDecorator} from "Shared/config/storybook/ThemeDecorator";
import {Theme} from "App/providers/themeProvider";

const meta = {
    title: 'shared/MyLink',
    component: MyLink,
    args: {
        children: 'Text',
        to: '/'
    }
} satisfies Meta<typeof MyLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {}
};
export const Secondary: Story = {
    args: {
        theme: ThemeLink.SECONDARY
    },
};

export const PrimaryDark: Story = {
    args: {},
    decorators: [
        (Story) => (ThemeDecorator(Theme.DARK)(Story))
    ]
};
export const SecondaryDark: Story = {
    args: {
        theme: ThemeLink.SECONDARY
    },
    decorators: [
        (Story) => (ThemeDecorator(Theme.DARK)(Story))
    ]
};
