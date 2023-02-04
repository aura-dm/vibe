var x=Object.defineProperty;var l=(e,t)=>x(e,"name",{value:t,configurable:!0});import{H as o}from"./styled-components.browser.esm-7eff8319.js";import{V as i}from"./VTypography-739669cd.js";import{a as f,j as a}from"./jsx-runtime-9ef5153c.js";import"./index-032912bc.js";import"./es.object.get-own-property-descriptor-3c6dc3cf.js";const y=o.div`
  ${({theme:e})=>e.components.textField.base};
`,T=o(i).attrs({component:"input",variant:"body"})`
  ${({theme:e})=>e.components.textField.input};
`,V=o(i).attrs({component:"label",variant:"body"})`
  ${({theme:e})=>e.components.textField.label};
`,n=l(({label:e,labelId:t,name:p,onChange:d,placeholder:s,type:m="text",value:c,...u})=>f(y,{...u,children:[e&&a(V,{htmlFor:t,children:e}),a(T,{id:t,name:p,onChange:d,placeholder:s,type:m,value:c})]}),"VTextField"),r=n;try{n.displayName="VTextField",n.__docgenInfo={description:"Primary UI component for user input",displayName:"VTextField",props:{label:{defaultValue:null,description:"Label text",name:"label",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"Id that links the label to the input",name:"labelId",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Input element name",name:"name",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Optional change handler",name:"onChange",required:!1,type:{name:"((evt: ChangeEvent<HTMLInputElement>) => void)"}},placeholder:{defaultValue:null,description:"Text displayed before user input",name:"placeholder",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"Input type. i.e. text, password, email.",name:"type",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Value to be displayed. `onChange` handler is required if value is set.",name:"value",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VTextField/VTextField.tsx#VTextField"]={docgenInfo:n.__docgenInfo,name:"VTextField",path:"src/components/VTextField/VTextField.tsx#VTextField"})}catch{}const I={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";

import VTextField from "./VTextField";

export default {
  title: "Components/VTextField",
  component: VTextField,
  argTypes: {
    label: { control: "text" },
  },
} as ComponentMeta<typeof VTextField>;

const Template: ComponentStory<typeof VTextField> = (args) => (
  <VTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Example input",
  labelId: "input-label",
  name: "name",
  onChange: (evt) => console.log(evt),
  placeholder: "Start typing...",
  type: "text",
};
`,locationsMap:{default:{startLoc:{col:52,line:13},endLoc:{col:1,line:15},startBody:{col:52,line:13},endBody:{col:1,line:15}}}}},title:"Components/VTextField",component:r,argTypes:{label:{control:"text"}}},g=l(e=>a(r,{...e}),"Template"),F=g.bind({});F.args={label:"Example input",labelId:"input-label",name:"name",onChange:e=>console.log(e),placeholder:"Start typing...",type:"text"};const E=["Default"];export{F as Default,E as __namedExportsOrder,I as default};
//# sourceMappingURL=VTextField.stories-d99fbbac.js.map
