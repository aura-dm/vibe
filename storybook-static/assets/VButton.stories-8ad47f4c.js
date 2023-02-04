var r=Object.defineProperty;var o=(t,e)=>r(t,"name",{value:e,configurable:!0});import{V as n}from"./VButton-03fd784d.js";import{j as a}from"./jsx-runtime-9ef5153c.js";import"./styled-components.browser.esm-7eff8319.js";import"./index-032912bc.js";import"./es.object.get-own-property-descriptor-3c6dc3cf.js";import"./VTypography-739669cd.js";const B={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import VButton from "./VButton";

export default {
  title: "Components/VButton",
  component: VButton,
  argTypes: {
    variant: { control: "select" },
  },
} as ComponentMeta<typeof VButton>;

const Template: ComponentStory<typeof VButton> = (args) => (
  <VButton {...args} />
);

export const Overview = Template.bind({});
Overview.args = {
  children: "Button",
  disabled: false,
  onClick: () => alert("Clicked"),
  variant: "secondary",
};
`,locationsMap:{overview:{startLoc:{col:49,line:13},endLoc:{col:1,line:15},startBody:{col:49,line:13},endBody:{col:1,line:15}}}}},title:"Components/VButton",component:n,argTypes:{variant:{control:"select"}}},s=o(t=>a(n,{...t}),"Template"),i=s.bind({});i.args={children:"Button",disabled:!1,onClick:()=>alert("Clicked"),variant:"secondary"};const y=["Overview"];export{i as Overview,y as __namedExportsOrder,B as default};
//# sourceMappingURL=VButton.stories-8ad47f4c.js.map
