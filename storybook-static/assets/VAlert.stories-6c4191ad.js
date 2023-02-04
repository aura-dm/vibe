var p=Object.defineProperty;var o=(e,t)=>p(e,"name",{value:t,configurable:!0});import"./index-4d6124a1.js";import{j as r,a}from"./jsx-runtime-9ef5153c.js";import{V as l}from"./VSvgIcon-ca828fc0.js";import{V as m,a as d,b as V}from"./VWarningIcon-2914dbdb.js";import{H as c}from"./styled-components.browser.esm-7eff8319.js";import{V as f}from"./VTypography-739669cd.js";import"./index-032912bc.js";import"./es.object.get-own-property-descriptor-3c6dc3cf.js";const n=o(({...e})=>r(l,{...e,children:r("path",{d:"M11.99 22C6.46846 21.9945 1.99632 17.5149 2 11.9933C2.00368 6.47179 6.48179 1.99816 12.0033 2C17.5249 2.00184 22 6.47845 22 12C21.9967 17.5254 17.5154 22.0022 11.99 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.6845 16.444 4.10977 12.0425 4.08599C7.64111 4.06245 4.04732 7.59876 4 12V12.172ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z",fill:"inherit"})}),"VErrorIcon");try{n.displayName="VErrorIcon",n.__docgenInfo={description:"",displayName:"VErrorIcon",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/icons/VErrorIcon.tsx#VErrorIcon"]={docgenInfo:n.__docgenInfo,name:"VErrorIcon",path:"src/icons/VErrorIcon.tsx#VErrorIcon"})}catch{}const h=c(f).attrs({component:"p",variant:"body"})`
  ${({theme:e})=>e.components.alert.base};
`,_=c.span`
  ${({theme:e})=>e.components.alert.icon};
`,s=o(({children:e,type:t})=>a(h,{className:t,children:[a(_,{children:[t==="error"&&r(n,{height:"20px",width:"20px"}),t==="info"&&r(m,{height:"20px",width:"20px"}),t==="success"&&r(d,{height:"20px",width:"20px"}),t==="warning"&&r(V,{height:"20px",width:"20px"})]}),e]}),"VAlert"),i=s;try{s.displayName="VAlert",s.__docgenInfo={description:"An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.",displayName:"VAlert",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VAlert/VAlert.tsx#VAlert"]={docgenInfo:s.__docgenInfo,name:"VAlert",path:"src/components/VAlert/VAlert.tsx#VAlert"})}catch{}const B={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

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
`,locationsMap:{base:{startLoc:{col:48,line:13},endLoc:{col:78,line:13},startBody:{col:48,line:13},endBody:{col:78,line:13}}}}},title:"Components/VAlert",component:i,argTypes:{type:{control:"select"}}},A=o(e=>r(i,{...e}),"Template"),y=A.bind({});y.args={children:"This is an alert",type:"info"};const w=["Base"];export{y as Base,w as __namedExportsOrder,B as default};
//# sourceMappingURL=VAlert.stories-6c4191ad.js.map
