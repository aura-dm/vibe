import { ComponentMeta, ComponentStory } from "@storybook/react";

import VTypography from "../../dataDisplay/VTypography";
import VButton from "../../inputs/VButton";
import VToolbar from "./VToolbar";

export default {
  title: "Components/Layout/VToolbar",
  component: VToolbar,
} as ComponentMeta<typeof VToolbar>;

const Template: ComponentStory<typeof VToolbar> = (args) => (
  <div style={{ width: "800px" }}>
    <VToolbar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <VTypography component="h1" variant="h3">
        Title
      </VTypography>
      <div>
        <VButton>Settings</VButton>
      </div>
    </>
  ),
};
