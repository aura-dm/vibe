import { css } from "styled-components";

const typographyTheme = {
  base: css`
    color: ${({ theme }) => theme.colors.neutral.c900};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: ${({ theme }) => theme.fontSize.body[0]};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    line-height: ${({ theme }) => theme.fontSize.body[1]};

    &.h1,
    &.h2,
    &.h3,
    &.h4,
    &.h5 {
      font-family: ${({ theme }) => theme.fontFamily.primary};
      font-weight: ${({ theme }) => theme.fontWeight.normal};
      margin: 0 0 ${({ theme }) => theme.spacing[4]};
    }

    &.h1 {
      font-size: ${({ theme }) => theme.fontSize.h1[0]};
      line-height: ${({ theme }) => theme.fontSize.h1[1]};
      margin-top: 0;
    }

    &.h2 {
      font-size: ${({ theme }) => theme.fontSize.h2[0]};
      line-height: ${({ theme }) => theme.fontSize.h2[1]};
    }

    &.h3 {
      font-size: ${({ theme }) => theme.fontSize.h3[0]};
      line-height: ${({ theme }) => theme.fontSize.h3[1]};
    }

    &.h4 {
      font-size: ${({ theme }) => theme.fontSize.h4[0]};
      line-height: ${({ theme }) => theme.fontSize.h4[1]};
    }

    &.h5 {
      font-size: ${({ theme }) => theme.fontSize.h5[0]};
      line-height: ${({ theme }) => theme.fontSize.h5[1]};
    }

    &.subtitle {
      font-size: ${({ theme }) => theme.fontSize.subtitle[0]};
      line-height: ${({ theme }) => theme.fontSize.subtitle[1]};
    }

    &.small {
      font-size: ${({ theme }) => theme.fontSize.small[0]};
      line-height: ${({ theme }) => theme.fontSize.small[1]};
    }

    &.p {
      font-size: ${({ theme }) => theme.fontSize.body[0]};
      line-height: ${({ theme }) => theme.fontSize.body[1]};
      margin-bottom: ${({ theme }) => theme.spacing[4]};
    }
  `,
};

export default typographyTheme;
