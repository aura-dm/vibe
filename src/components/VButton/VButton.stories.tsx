import { ComponentMeta, ComponentStory } from "@storybook/react";

import VButton from "./VButton";

export default {
  title: "Components/VButton",
  component: VButton,
} as ComponentMeta<typeof VButton>;

const Template: ComponentStory<typeof VButton> = (args) => (
  <VButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  isPrimary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
};
