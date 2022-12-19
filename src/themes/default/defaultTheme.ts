import { DefaultTheme } from "styled-components";

import ButtonTheme from "../../components/VButton/VButton.theme";
import TextFieldTheme from "../../components/VTextField/VTextField.theme";
import ToolbarTheme from "../../components/VToolbar/VToolbar.theme";
import colors from "./colors";
import fontFamily from "./fontFamily";
import fontSize from "./fontSize";

const defaultTheme: DefaultTheme = {
  colors,
  fontFamily,
  fontSize,
  components: {
    button: ButtonTheme,
    textField: TextFieldTheme,
    toolbar: ToolbarTheme,
  },
};

export default defaultTheme;
