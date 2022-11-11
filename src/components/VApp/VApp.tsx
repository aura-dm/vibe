import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import defaultTheme from '../../themes/defaultTheme';
import { GlobalStyles } from './VApp.styles';

interface Props {
  children: ReactNode;
  theme: DefaultTheme;
}

/**
 * App container that provides theming and other functionality
 */
const VTypography = ({ children, theme = defaultTheme }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default VTypography;
