import { ComponentMeta, ComponentStory } from "@storybook/react";

import VImage from "./VImage";

export default {
  title: "Components/Data Display/VImage",
  component: VImage,
} as ComponentMeta<typeof VImage>;

const Template: ComponentStory<typeof VImage> = (args) => {
  return <VImage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  alt: "",
  height: "240px",
  url: "https://cdn.dribbble.com/users/1757989/screenshots/7364561/media/4036c7ddc073d583ef37b36dd4a1d7f6.png?compress=1&resize=1600x1200&vertical=top",
  width: "400px",
};
