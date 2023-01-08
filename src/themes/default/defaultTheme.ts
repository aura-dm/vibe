import { DefaultTheme } from "styled-components";

import alertTheme from "../../components/VAlert/VAlert.theme";
import buttonTheme from "../../components/VButton/VButton.theme";
import textFieldTheme from "../../components/VTextField/VTextField.theme";
import toolbarTheme from "../../components/VToolbar/VToolbar.theme";
import typographyTheme from "../../components/VTypography/VTypography.theme";
import colors from "./tokens/colors";
import fontFamily from "./tokens/fontFamily";
import fontSize from "./tokens/fontSize";
import spacing from "./tokens/spacing";

const defaultTheme: DefaultTheme = {
  colors,
  components: {
    alert: alertTheme,
    button: buttonTheme,
    textField: textFieldTheme,
    toolbar: toolbarTheme,
    typography: typographyTheme,
  },
  fontFamily,
  fontSize,
  spacing,
};

export default defaultTheme;
