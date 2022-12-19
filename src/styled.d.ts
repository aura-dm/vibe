import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        c400: string;
        c500: string;
        c600: string;
      };
      surface: {
        c50: string;
        c100: string;
        c200: string;
        c300: string;
        c400: string;
        c500: string;
        c600: string;
        c700: string;
        c800: string;
        c900: string;
      };
      transparent: string;
    };
    fontFamily: {
      primary: string;
    };
    fontSize: {
      xs: string[];
      sm: string[];
      body: string[];
      h5: string[];
      h4: string[];
      h3: string[];
      h2: string[];
      h1: string[];
    };
    components: {
      button: {
        base: ThemedCssFunction;
      };
      textField: {
        base: ThemedCssFunction;
        input: ThemedCssFunction;
        label: ThemedCssFunction;
      };
      toolbar: {
        base: ThemedCssFunction;
      };
    };
  }
}
