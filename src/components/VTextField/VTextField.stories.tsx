import { ComponentMeta, ComponentStory } from "@storybook/react";

import VTextField from "./VTextField";

export default {
  title: "Components/VTextField",
  component: VTextField,
} as ComponentMeta<typeof VTextField>;

const Template: ComponentStory<typeof VTextField> = (args) => (
  <VTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onChange: (evt) => console.log(evt),
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Example input",
  labelId: "input-label",
  onChange: (evt) => console.log(evt),
};
