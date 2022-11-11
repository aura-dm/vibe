import { ComponentStory, ComponentMeta } from '@storybook/react';

import VApp from './VApp';
import VButton from '../VButton';
import defaultTheme from '../../themes/defaultTheme';

export default {
  title: 'Components/VApp',
  component: VApp,
} as ComponentMeta<typeof VApp>;

const Template: ComponentStory<typeof VApp> = (args) => <VApp {...args} />;

export const DefaultTheme = Template.bind({});
DefaultTheme.args = {
  children: <VButton isPrimary={true}>Button</VButton>,
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  children: <VButton isPrimary={true}>Button</VButton>,
  theme: {
    ...defaultTheme,
    colors: {
      primary: {
        c400: '#bf5821',
        c500: '#af6118',
        c600: '#934d10',
      },
    },
  },
};
