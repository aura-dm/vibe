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
    components: {
      alert: {
        base: ThemedCssFunction;
        icon: ThemedCssFunction;
      };
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
      typography: {
        base: ThemedCssFunction;
      };
    };
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontSize: {
      body: string[];
      h1: string[];
      h2: string[];
      h3: string[];
      h4: string[];
      h5: string[];
      small: string[];
      subtitle: string[];
    };
    spacing: (value: number) => string;
  }
}
