import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      current: string;
      error: {
        c100: string;
      };
      primary: {
        c100: string;
        c200: string;
        c300: string;
        c400: string;
        c500: string;
        c600: string;
      };
      success: {
        c100: string;
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
      text: {
        c50: string;
        c100: string;
        c200: string;
        c300: string;
        c400: string;
        c500: string;
      };
      textAlt: {
        c50: string;
        c100: string;
        c200: string;
        c300: string;
        c400: string;
        c500: string;
      };
      textError: {
        c400: string;
        c500: string;
      };
      textSuccess: {
        c400: string;
        c500: string;
      };
      textWarning: {
        c400: string;
        c500: string;
      };
      transparent: string;
      warning: {
        c100: string;
      };
    };
    components: {
      alert: {
        base: ThemedCssFunction;
        icon: ThemedCssFunction;
      };
      button: {
        base: ThemedCssFunction;
      };
      iconButton: {
        base: ThemedCssFunction;
      };
      image: {
        base: ThemedCssFunction;
      };
      loading: {
        base: ThemedCssFunction;
      };
      modal: {
        base: ThemedCssFunction;
        overlay: ThemedCssFunction;
        panel: ThemedCssFunction;
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
    fontWeight: {
      normal: number;
      medium: number;
      bold: number;
    };
    shadows: {
      input: {
        focus: string;
      };
      modal: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };
    spacing: string[];
  }
}
