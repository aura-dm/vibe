import { DefaultTheme } from "styled-components";

import colors from "./colors";
import ButtonTheme from "./components/Button";
import TextFieldTheme from "./components/TextField";
import fontFamily from "./fontFamily";
import fontSize from "./fontSize";

const defaultTheme: DefaultTheme = {
  colors,
  fontFamily,
  fontSize,
  components: {
    button: ButtonTheme,
    textField: TextFieldTheme,
  },
};

export default defaultTheme;
