import { ReactNode } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import defaultTheme from "../../../themes/default/defaultTheme";
import { GlobalStyles } from "./VApp.styles";
import AppProvider from "./stores/AppStore/AppProvider";

interface Props {
  children: ReactNode;
  portalId?: string;
  theme?: DefaultTheme;
}

/**
 * App container that provides theming and other functionality
 */
const VApp = ({ children, theme = defaultTheme }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        {children}
      </AppProvider>
    </ThemeProvider>
  );
};

export default VApp;
