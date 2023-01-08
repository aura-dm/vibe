import { ComponentMeta, ComponentStory } from "@storybook/react";

import VAlert from "./VAlert";

export default {
  title: "Components/VAlert",
  component: VAlert,
  argTypes: {
    type: { control: "select" },
  },
} as ComponentMeta<typeof VAlert>;

const Template: ComponentStory<typeof VAlert> = (args) => <VAlert {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "This is an alert",
  type: "info",
};
