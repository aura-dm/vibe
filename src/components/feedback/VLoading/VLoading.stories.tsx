import { ComponentMeta, ComponentStory } from "@storybook/react";

import VLoading from "./VLoading";

export default {
  title: "Components/Feedback/VLoading",
  component: VLoading,
  argTypes: {},
} as ComponentMeta<typeof VLoading>;

const Template: ComponentStory<typeof VLoading> = (args) => (
  <VLoading {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  size: 32,
};
