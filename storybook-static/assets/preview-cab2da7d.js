var d=Object.defineProperty;var t=(e,o)=>d(e,"name",{value:o,configurable:!0});import{C as r,W as f,F as b}from"./styled-components.browser.esm-7eff8319.js";import{r as i}from"./index-032912bc.js";import{j as c,a as h}from"./jsx-runtime-9ef5153c.js";import"./es.object.get-own-property-descriptor-3c6dc3cf.js";const u={base:r`
    align-items: center;
    display: flex;
    font-family: ${({theme:e})=>e.fontSize.body};
    gap: ${({theme:e})=>e.spacing[3]};
    padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};

    &.error {
      border: 1px solid ${({theme:e})=>e.colors.error.c100};
      color: ${({theme:e})=>e.colors.textError.c500};
      fill: ${({theme:e})=>e.colors.textError.c500};
    }

    &.info {
      border: 1px solid ${({theme:e})=>e.colors.primary.c200};
      color: ${({theme:e})=>e.colors.primary.c600};
      fill: ${({theme:e})=>e.colors.primary.c400};
    }

    &.success {
      border: 1px solid ${({theme:e})=>e.colors.success.c100};
      color: ${({theme:e})=>e.colors.textSuccess.c500};
      fill: ${({theme:e})=>e.colors.textSuccess.c400};
    }

    &.warning {
      border: 1px solid ${({theme:e})=>e.colors.warning.c100};
      color: ${({theme:e})=>e.colors.textWarning.c500};
      fill: ${({theme:e})=>e.colors.textWarning.c400};
    }
  `,icon:r`
    align-items: center;
    display: flex;
    flex-shrink: 0;
  `},g={base:r`
    background-color: ${({theme:e})=>e.colors.transparent};
    border: 1px solid ${({theme:e})=>e.colors.transparent};
    border-radius: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.colors.text.c500};
    cursor: pointer;
    padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[4]}`};

    &:hover {
      background-color: ${({theme:e})=>e.colors.surface.c100};
    }

    &:focus-visible {
      ${({theme:e})=>e.shadows.input.focus}
      outline: none;
    }

    &:disabled {
      color: ${({theme:e})=>e.colors.text.c100};
      pointer-events: none;
    }

    &.primary {
      background-color: ${({theme:e})=>e.colors.primary.c500};
      border: 1px solid ${({theme:e})=>e.colors.primary.c500};
      color: ${({theme:e})=>e.colors.textAlt.c500};

      &:hover {
        background-color: ${({theme:e})=>e.colors.primary.c600};
        border: 1px solid ${({theme:e})=>e.colors.primary.c600};
      }

      &:focus-visible {
        box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.primary.c100};
        outline: none;
      }

      &:disabled {
        background-color: ${({theme:e})=>e.colors.primary.c300};
        border: 1px solid ${({theme:e})=>e.colors.primary.c300};
        color: ${({theme:e})=>e.colors.textAlt.c500};
      }
    }

    &.secondary {
      border: 1px solid ${({theme:e})=>e.colors.surface.c500};
      color: ${({theme:e})=>e.colors.text.c400};

      &:hover {
        background-color: ${({theme:e})=>e.colors.surface.c100};
        color: ${({theme:e})=>e.colors.text.c500};
      }

      &:focus-visible {
        box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.surface.c200};
        outline: none;
      }

      &:disabled {
        border: 1px solid ${({theme:e})=>e.colors.surface.c300};
        color: ${({theme:e})=>e.colors.text.c100};
      }
    }
  `},$={base:r`
    align-items: center;
    background-color: ${({theme:e})=>e.colors.transparent};
    border-radius: 100%;
    color: ${({theme:e})=>e.colors.text.c400};
    cursor: pointer;
    display: flex;
    height: ${({theme:e})=>e.spacing[9]};
    justify-content: center;
    width: ${({theme:e})=>e.spacing[9]};

    &:hover {
      background-color: ${({theme:e})=>e.colors.surface.c100};
    }

    &:focus-visible {
      box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.surface.c200};
      outline: none;
    }
  `},x={base:r`
    align-items: center;
    display: flex;
    justify-content: center;
    left: 0;
    height: 100%;
    padding: ${({theme:e})=>e.spacing[6]};
    position: fixed;
    top: 0;
    width: 100%;
  `,overlay:r`
    background-color: rgba(255, 255, 255, 0.7);
    height: 100%;
    left: 0;
    min-height: 100%;
    position: fixed;
    top: 0;
    width: 100%;
  `,panel:r`
    background-color: ${({theme:e})=>e.colors.surface.c50};
    ${({theme:e})=>e.shadows.modal.xl}
    height: 100%;
    width: 100%;
  `},y={base:r`
    display: flex;
    flex-direction: column;
  `,input:r`
    background-color: ${({theme:e})=>e.colors.transparent};
    border: 1px solid ${({theme:e})=>e.colors.surface.c300};
    border-radius: ${({theme:e})=>e.spacing[1]};
    color: ${({theme:e})=>e.colors.text.c500};
    padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};

    &::placeholder {
      color: ${({theme:e})=>e.colors.text.c100};
    }

    &:hover {
      border: 1px solid ${({theme:e})=>e.colors.surface.c300};
    }

    &:focus-visible {
      ${({theme:e})=>e.shadows.input.focus}
      outline: none;
    }
  `,label:r`
    color: ${({theme:e})=>e.colors.text.c500};
  `},w={base:r`
    align-items: center;
    border-bottom: 1px solid ${({theme:e})=>e.colors.surface.c200};
    display: flex;
    height: ${({theme:e})=>e.spacing[12]};
    justify-content: space-between;
    padding: 0 ${({theme:e})=>e.spacing[5]};
    width: 100%;
  `},S={base:r`
    color: ${({theme:e})=>e.colors.text.c500};
    display: block;
    font-family: ${({theme:e})=>e.fontFamily.secondary};
    font-size: ${({theme:e})=>e.fontSize.body[0]};
    font-weight: ${({theme:e})=>e.fontWeight.normal};
    line-height: ${({theme:e})=>e.fontSize.body[1]};

    &.h1,
    &.h2,
    &.h3,
    &.h4,
    &.h5 {
      font-family: ${({theme:e})=>e.fontFamily.primary};
      font-weight: ${({theme:e})=>e.fontWeight.normal};
      margin: 0 0 ${({theme:e})=>e.spacing[4]};
    }

    &.h1 {
      font-size: ${({theme:e})=>e.fontSize.h1[0]};
      line-height: ${({theme:e})=>e.fontSize.h1[1]};
      margin-top: 0;
    }

    &.h2 {
      font-size: ${({theme:e})=>e.fontSize.h2[0]};
      line-height: ${({theme:e})=>e.fontSize.h2[1]};
    }

    &.h3 {
      font-size: ${({theme:e})=>e.fontSize.h3[0]};
      line-height: ${({theme:e})=>e.fontSize.h3[1]};
    }

    &.h4 {
      font-size: ${({theme:e})=>e.fontSize.h4[0]};
      line-height: ${({theme:e})=>e.fontSize.h4[1]};
    }

    &.h5 {
      font-size: ${({theme:e})=>e.fontSize.h5[0]};
      line-height: ${({theme:e})=>e.fontSize.h5[1]};
    }

    &.subtitle {
      font-size: ${({theme:e})=>e.fontSize.subtitle[0]};
      line-height: ${({theme:e})=>e.fontSize.subtitle[1]};
    }

    &.small {
      font-size: ${({theme:e})=>e.fontSize.small[0]};
      line-height: ${({theme:e})=>e.fontSize.small[1]};
    }

    &.p {
      font-size: ${({theme:e})=>e.fontSize.body[0]};
      line-height: ${({theme:e})=>e.fontSize.body[1]};
      margin-bottom: ${({theme:e})=>e.spacing[4]};
    }
  `},n={current:"currentcolor",error:{c100:"#e9d5d5"},primary:{c100:"#ffecf8",c200:"#ebb7d9",c300:"#d782b9",c400:"#c34d9a",c500:"#af187a",c600:"#931065"},success:{c100:"#d1e2bb"},surface:{c50:"#ffffff",c100:"#f4f4f4",c200:"#e8e8e8",c300:"#dddddd",c400:"#d2d2d2",c500:"#c6c6c6",c600:"#bbbbbb",c700:"#b0b0b0",c800:"#a4a4a4",c900:"#999999"},text:{c50:"rgba(0, 0, 0, 0.3)",c100:"rgba(0, 0, 0, 0.4)",c200:"rgba(0, 0, 0, 0.5)",c300:"rgba(0, 0, 0, 0.6)",c400:"rgba(0, 0, 0, 0.7)",c500:"rgba(0, 0, 0, 0.8)"},textAlt:{c50:"rgba(255, 255, 255, 0.25)",c100:"rgba(255, 255, 255, 0.4)",c200:"rgba(255, 255, 255, 0.55)",c300:"rgba(255, 255, 255, 0.7)",c400:"rgba(255, 255, 255, 0.85)",c500:"rgba(255, 255, 255, 1)"},textError:{c400:"#b82020",c500:"#961616"},textSuccess:{c400:"#58920c",c500:"#47760a"},textWarning:{c400:"#b87816",c500:"#a06813"},transparent:"transparent",warning:{c100:"#e0d2bb"}},A={primary:"'Questrial', Helvetica, Arial, sans-serif;",secondary:"'Noto Sans', Helvetica, Arial,, sans-serif"},v={body:["0.875rem","1.75"],h1:["3.052rem","1.3"],h2:["2.441rem","1.3"],h3:["1.953rem","1.3"],h4:["1.563rem","1.3"],h5:["1.25rem","1.3"],small:["0.8rem","1.75"],subtitle:["0.64rem","1.75"]},z={normal:400,medium:600,bold:700},_={input:{focus:`box-shadow: 0 0 0 2px ${n.surface.c200};`},modal:{sm:"filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));",md:"filter: drop-shadow(0 2px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 2px rgb(0 0 0 / 0.06));",lg:"filter: drop-shadow(0 5px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 2px 3px rgb(0 0 0 / 0.1));",xl:"filter: drop-shadow(0 10px 20px rgb(0 0 0 / 0.03)) drop-shadow(0 3px 8px rgb(0 0 0 / 0.08));"}},k=["0rem","0.25rem","0.5rem","0.75rem","1rem","1.25rem","1.5rem","1.75rem","2rem","2.25rem","2.5rem","2.75rem","3rem","3.25rem","3.5rem","3.75rem","4rem","4.25rem","4.5rem","4.75rem","5rem","5.25rem","5.5rem","5.75rem","6rem","6.25rem","6.5rem","6.75rem","7rem","7.25rem","7.5rem","7.75rem","8rem","8.25rem","8.5rem","8.75rem","9rem","9.25rem","9.5rem","9.75rem","10rem","10.25rem","10.5rem","10.75rem","11rem","11.25rem","11.5rem","11.75rem","12rem","12.25rem","12.5rem","12.75rem","13rem","13.25rem","13.5rem","13.75rem","14rem","14.25rem","14.5rem","14.75rem","15rem","15.25rem","15.5rem","15.75rem","16rem","16.25rem","16.5rem","16.75rem","17rem","17.25rem","17.5rem","17.75rem","18rem","18.25rem","18.5rem","18.75rem","19rem","19.25rem","19.5rem","19.75rem","20rem","20.25rem","20.5rem","20.75rem","21rem","21.25rem","21.5rem","21.75rem","22rem","22.25rem","22.5rem","22.75rem","23rem","23.25rem","23.5rem","23.75rem","24rem","24.25rem","24.5rem","24.75rem","25rem","25.25rem","25.5rem","25.75rem","26rem","26.25rem","26.5rem","26.75rem","27rem","27.25rem","27.5rem","27.75rem","28rem","28.25rem","28.5rem","28.75rem","29rem","29.25rem","29.5rem","29.75rem","30rem","30.25rem","30.5rem","30.75rem","31rem","31.25rem","31.5rem","31.75rem","32rem","32.25rem","32.5rem","32.75rem","33rem","33.25rem","33.5rem","33.75rem","34rem","34.25rem","34.5rem","34.75rem","35rem","35.25rem","35.5rem","35.75rem","36rem","36.25rem","36.5rem","36.75rem","37rem","37.25rem","37.5rem","37.75rem","38rem","38.25rem","38.5rem","38.75rem","39rem","39.25rem","39.5rem","39.75rem","40rem","40.25rem","40.5rem","40.75rem","41rem","41.25rem","41.5rem","41.75rem","42rem","42.25rem","42.5rem","42.75rem","43rem","43.25rem","43.5rem","43.75rem","44rem","44.25rem","44.5rem","44.75rem","45rem","45.25rem","45.5rem","45.75rem","46rem","46.25rem","46.5rem","46.75rem","47rem","47.25rem","47.5rem","47.75rem","48rem","48.25rem","48.5rem","48.75rem","49rem","49.25rem","49.5rem","49.75rem","50rem"],l={colors:n,components:{alert:u,button:g,iconButton:$,modal:x,textField:y,toolbar:w,typography:S},fontFamily:A,fontSize:v,fontWeight:z,shadows:_,spacing:k},T=f`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: ${({theme:e})=>e.fontFamily.primary};
    font-size: 16px;
  }

  a, button {
    cursor: revert;
  }

  ol, ul, menu {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input, textarea {
    -webkit-user-select: auto;
    user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  ::placeholder {
    color: unset;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    line-break: after-white-space;
    -webkit-user-select: auto;
    user-select: auto;
  }

  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }
`,p={modals:[]},V=i.createContext({dispatch:()=>null,state:p}),E=t((e,o)=>{switch(o.type){case"addModal":return{modals:[...e.modals,o.payload]};case"removeModal":return{modals:e.modals.filter(a=>a.id!==o.payload.id)};default:throw new Error}},"mainReducer"),s=t(({children:e})=>{const[o,a]=i.useReducer(E,p);return c(V.Provider,{value:{state:o,dispatch:a},children:e})},"AppProvider");try{s.displayName="AppProvider",s.__docgenInfo={description:"",displayName:"AppProvider",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VApp/stores/AppStore/AppProvider.tsx#AppProvider"]={docgenInfo:s.__docgenInfo,name:"AppProvider",path:"src/components/VApp/stores/AppStore/AppProvider.tsx#AppProvider"})}catch{}const m=t(({children:e,theme:o=l})=>c(b,{theme:o,children:h(s,{children:[c(T,{}),e]})}),"VApp");try{m.displayName="VApp",m.__docgenInfo={description:"App container that provides theming and other functionality",displayName:"VApp",props:{portalId:{defaultValue:null,description:"",name:"portalId",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/VApp/VApp.tsx#VApp"]={docgenInfo:m.__docgenInfo,name:"VApp",path:"src/components/VApp/VApp.tsx#VApp"})}catch{}const C=t(e=>c(m,{portalId:"portal",theme:l,children:c(e,{})}),"withThemeProvider"),W={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},j=[C];export{j as decorators,W as parameters};
//# sourceMappingURL=preview-cab2da7d.js.map
