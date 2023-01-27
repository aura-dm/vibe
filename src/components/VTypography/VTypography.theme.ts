import { css } from "styled-components";

import colors from "../../themes/default/tokens/colors";
import fontFamily from "../../themes/default/tokens/fontFamily";
import fontSize from "../../themes/default/tokens/fontSize";
import fontWeight from "../../themes/default/tokens/fontWeight";
import spacing from "../../themes/default/tokens/spacing";

const typographyTheme = {
  base: css`
    color: ${colors.text.c500};
    display: block;
    font-family: ${fontFamily.secondary};
    font-size: ${fontSize.body[0]};
    font-weight: ${fontWeight.normal};
    line-height: ${fontSize.body[1]};

    &.h1,
    &.h2,
    &.h3,
    &.h4,
    &.h5 {
      font-family: ${fontFamily.primary};
      font-weight: ${fontWeight.normal};
      margin: 0 0 ${spacing(4)};
    }

    &.h1 {
      font-size: ${fontSize.h1[0]};
      line-height: ${fontSize.h1[1]};
      margin-top: 0;
    }

    &.h2 {
      font-size: ${fontSize.h2[0]};
      line-height: ${fontSize.h2[1]};
    }

    &.h3 {
      font-size: ${fontSize.h3[0]};
      line-height: ${fontSize.h3[1]};
    }

    &.h4 {
      font-size: ${fontSize.h4[0]};
      line-height: ${fontSize.h4[1]};
    }

    &.h5 {
      font-size: ${fontSize.h5[0]};
      line-height: ${fontSize.h5[1]};
    }

    &.subtitle {
      font-size: ${fontSize.subtitle[0]};
      line-height: ${fontSize.subtitle[1]};
    }

    &.small {
      font-size: ${fontSize.small[0]};
      line-height: ${fontSize.small[1]};
    }

    &.p {
      font-size: ${fontSize.body[0]};
      line-height: ${fontSize.body[1]};
      margin-bottom: ${spacing(4)};
    }
  `,
};

export default typographyTheme;
