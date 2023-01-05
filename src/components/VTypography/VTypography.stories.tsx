import { ComponentMeta, ComponentStory } from "@storybook/react";

import VTypography from "./VTypography";

export default {
  title: "Components/VTypography",
  component: VTypography,
} as ComponentMeta<typeof VTypography>;

const Template: ComponentStory<typeof VTypography> = (args) => (
  <div>
    <VTypography component="h1" variant="h1">
      Heading 1
    </VTypography>
    <VTypography component="h2" variant="h2">
      Heading 2
    </VTypography>
    <VTypography component="h3" variant="h3">
      Heading 3
    </VTypography>
    <VTypography component="h4" variant="h4">
      Heading 4
    </VTypography>
    <VTypography component="h5" variant="h5">
      Heading 5
    </VTypography>
    <VTypography component="p" variant="body">
      Paragraph
    </VTypography>
    <VTypography component="p" variant="small">
      Small
    </VTypography>
    <VTypography component="p" variant="subtitle">
      Subtitle
    </VTypography>
  </div>
);

export const Default = Template.bind({});
