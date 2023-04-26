import { ComponentMeta, ComponentStory } from "@storybook/react";

import VSvgIcon from "./VSvgIcon";

export default {
  title: "Components/Data Display/VSvgIcon",
  component: VSvgIcon,
  argTypes: {
    children: { control: false },
    height: { control: "text" },
    width: { control: "text" },
  },
} as ComponentMeta<typeof VSvgIcon>;

const Template: ComponentStory<typeof VSvgIcon> = (args) => (
  <VSvgIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <path
      d="M19 21H10C8.89543 21 8 20.1046 8 19V15H10V19H19V5H10V9H8V5C8 3.89543 8.89543 3 10 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21ZM12 16V13H3V11H12V8L17 12L12 16Z"
      fill="#2E3A59"
    />
  ),
  height: "24px",
  width: "24px",
};
