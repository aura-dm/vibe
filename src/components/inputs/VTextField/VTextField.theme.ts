import { css } from "styled-components";

const textFieldTheme = {
  base: css`
    display: flex;
    flex-direction: column;
  `,
  input: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.surface.c300};
    border-radius: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.colors.text.c500};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.c100};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.surface.c300};
    }

    &:focus-visible {
      ${({ theme }) => theme.shadows.input.focus}
      outline: none;
    }
  `,
  label: css`
    color: ${({ theme }) => theme.colors.text.c500};
  `,
};

export default textFieldTheme;
