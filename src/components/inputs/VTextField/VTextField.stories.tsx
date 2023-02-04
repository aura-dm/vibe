import { ComponentMeta, ComponentStory } from "@storybook/react";

import VTextField from "./VTextField";

export default {
  title: "Components/Inputs/VTextField",
  component: VTextField,
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof VTextField>;

const Template: ComponentStory<typeof VTextField> = (args) => (
  <VTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Example input",
  labelId: "input-label",
  name: "name",
  onChange: (evt) => console.log(evt),
  placeholder: "Start typing...",
  type: "text",
};
