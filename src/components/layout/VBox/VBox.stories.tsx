import { ComponentMeta, ComponentStory } from "@storybook/react";

import VBox from "./VBox";

export default {
  title: "Components/Layout/VBox",
  component: VBox,
  argTypes: {
    type: { control: "select" },
  },
} as ComponentMeta<typeof VBox>;

const Template: ComponentStory<typeof VBox> = (args) => <VBox {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "This is a box!",
  bg: "primary.c100",
  borderColor: "primary.c400",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "primary.c600",
  p: 3,
};
