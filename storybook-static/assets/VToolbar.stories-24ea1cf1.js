var l=Object.defineProperty;var e=(o,r)=>l(o,"name",{value:r,configurable:!0});import{V as p}from"./VButton-03fd784d.js";import{V as s}from"./VTypography-739669cd.js";import{H as i}from"./styled-components.browser.esm-7eff8319.js";import{j as n,a as c,F as m}from"./jsx-runtime-9ef5153c.js";import"./index-032912bc.js";import"./es.object.get-own-property-descriptor-3c6dc3cf.js";const d=i.div`
  ${({theme:o})=>o.components.toolbar.base};
`,t=e(({children:o,...r})=>n(d,{...r,children:o}),"VToolbar"),a=t;try{t.displayName="VToolbar",t.__docgenInfo={description:"Element for laying out controls",displayName:"VToolbar",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VToolbar/VToolbar.tsx#VToolbar"]={docgenInfo:t.__docgenInfo,name:"VToolbar",path:"src/components/VToolbar/VToolbar.tsx#VToolbar"})}catch{}const S={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import VButton from "../VButton";
import VTypography from "../VTypography";
import VToolbar from "./VToolbar";

export default {
  title: "Components/VToolbar",
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
`,locationsMap:{default:{startLoc:{col:50,line:12},endLoc:{col:1,line:16},startBody:{col:50,line:12},endBody:{col:1,line:16}}}}},title:"Components/VToolbar",component:a},T=e(o=>n("div",{style:{width:"800px"},children:n(a,{...o})}),"Template"),V=T.bind({});V.args={children:c(m,{children:[n(s,{component:"h1",variant:"h3",children:"Title"}),n("div",{children:n(p,{children:"Settings"})})]})};const x=["Default"];export{V as Default,x as __namedExportsOrder,S as default};
//# sourceMappingURL=VToolbar.stories-24ea1cf1.js.map
