import { DefaultTheme } from "styled-components";

import imageTheme from "../../components/dataDisplay/VImage/VImage.theme";
import typographyTheme from "../../components/dataDisplay/VTypography/VTypography.theme";
import alertTheme from "../../components/feedback/VAlert/VAlert.theme";
import loadingTheme from "../../components/feedback/VLoading/VLoading.theme";
import buttonTheme from "../../components/inputs/VButton/VButton.theme";
import iconButtonTheme from "../../components/inputs/VIconButton/VIconButton.theme";
import textFieldTheme from "../../components/inputs/VTextField/VTextField.theme";
import toolbarTheme from "../../components/layout/VToolbar/VToolbar.theme";
import modalTheme from "../../components/utils/VModal/VModal.theme";
import colors from "./tokens/colors";
import fontFamily from "./tokens/fontFamily";
import fontSize from "./tokens/fontSize";
import fontWeight from "./tokens/fontWeight";
import shadows from "./tokens/shadows";
import spacing from "./tokens/spacing";

const defaultTheme: DefaultTheme = {
  colors,
  components: {
    alert: alertTheme,
    button: buttonTheme,
    iconButton: iconButtonTheme,
    image: imageTheme,
    loading: loadingTheme,
    modal: modalTheme,
    textField: textFieldTheme,
    toolbar: toolbarTheme,
    typography: typographyTheme,
  },
  fontFamily,
  fontSize,
  fontWeight,
  shadows,
  spacing,
};

export default defaultTheme;
