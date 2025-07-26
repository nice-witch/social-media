import type {Meta, StoryObj} from '@storybook/react-webpack5';
import {LoaderPage} from './LoaderPage';

const meta = {
    title: 'widgets/LoaderPage',
    component: LoaderPage,
} satisfies Meta<typeof LoaderPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {}
};
