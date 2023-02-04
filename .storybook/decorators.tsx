import React, { DecoratorFn } from "@storybook/react";

import VApp from "../src/components/utils/VApp";
import defaultTheme from "../src/themes/default";

export const withThemeProvider: DecoratorFn = (Story) => (
  <VApp portalId="portal" theme={defaultTheme}>
    <Story />
  </VApp>
);
