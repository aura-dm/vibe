import { addons } from "@storybook/addons";

import theme from "./theme.cjs";

addons.setConfig({
  enableShortcuts: true,
  initialActive: "sidebar",
  isFullscreen: false,
  panelPosition: "bottom",
  selectedPanel: undefined,
  showNav: true,
  showPanel: true,
  showToolbar: true,
  sidebar: {
    showRoots: true,
    collapsedRoots: ["other"],
  },
  theme,
  toolbar: {
    copy: { hidden: false },
    eject: { hidden: false },
    fullscreen: { hidden: false },
    title: { hidden: false },
    zoom: { hidden: false },
  },
});
