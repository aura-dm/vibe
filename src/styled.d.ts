import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        c400: string;
        c500: string;
        c600: string;
      };
    };
    fonts: {
      primary: string;
    };
  }
}
