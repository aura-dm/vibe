import React, { DecoratorFn } from '@storybook/react';
import VApp from '../src/components/VApp';
import defaultTheme from '../src/themes/default';

export const withThemeProvider: DecoratorFn = (Story) => (
  <VApp theme={defaultTheme}>
    <Story />
  </VApp>
);
