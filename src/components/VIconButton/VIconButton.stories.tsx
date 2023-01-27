import { ComponentMeta, ComponentStory } from "@storybook/react";

import VCloseIcon from "../../icons/VCloseIcon";
import VIconButton from "./VIconButton";

export default {
  title: "Components/VIconButton",
  component: VIconButton,
  argTypes: {
    children: { control: false },
  },
} as ComponentMeta<typeof VIconButton>;

const Template: ComponentStory<typeof VIconButton> = (args) => (
  <VIconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <VCloseIcon />,
  onClick: () => alert("Clicked"),
};
