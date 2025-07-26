import React from 'react';
import type {Preview} from '@storybook/react-webpack5'
import StyleDecorator from '../../src/Shared/config/storybook/StyleDecorator';
import {ThemeDecorator} from "../../src/Shared/config/storybook/ThemeDecorator";
import {RouteDecorator} from "../../src/Shared/config/storybook/RouteDecorator";
import {Theme} from "../../src/App/providers/themeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  decorators: [
      (Story) => (<StyleDecorator><Story /></StyleDecorator>),
      (Story) => (ThemeDecorator(Theme.LIGHT)(Story)),
      (Story) => (<RouteDecorator><Story /></RouteDecorator>),
  ]
};

export default preview;