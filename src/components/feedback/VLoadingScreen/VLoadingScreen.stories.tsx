import { ComponentMeta, ComponentStory } from "@storybook/react";

import VLoadingScreen from "./VLoadingScreen";

export default {
  title: "Components/Feedback/VLoadingScreen",
  component: VLoadingScreen,
  argTypes: {},
} as ComponentMeta<typeof VLoadingScreen>;

const Template: ComponentStory<typeof VLoadingScreen> = (args) => (
  <div style={{ height: "400px", width: "100%" }}>
    <VLoadingScreen {...args} />
  </div>
);

export const Overview = Template.bind({});
