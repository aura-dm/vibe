import { ComponentMeta, ComponentStory } from "@storybook/react";

import VTypography from "./VTypography";

export default {
  title: "Components/Data Display/VTypography",
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
    <VTypography component="p" variant="body" style={{ margin: "0 0 12px" }}>
      Paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque elementum pharetra felis fringilla finibus. Quisque scelerisque
      libero eu quam tempus consectetur. Mauris nulla nulla, luctus quis enim
      nec, vehicula tincidunt libero.
    </VTypography>
    <VTypography component="p" variant="small" style={{ margin: "0 0 12px" }}>
      Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      elementum pharetra felis fringilla finibus. Quisque scelerisque libero eu
      quam tempus consectetur. Mauris nulla nulla, luctus quis enim nec,
      vehicula tincidunt libero.
    </VTypography>
    <VTypography component="p" variant="subtitle">
      Subtitle - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quisque elementum pharetra felis fringilla finibus. Quisque scelerisque
      libero eu quam tempus consectetur. Mauris nulla nulla, luctus quis enim
      nec, vehicula tincidunt libero.
    </VTypography>
  </div>
);

export const Default = Template.bind({});
