import { css } from "styled-components";

const textFieldTheme = {
  base: css`
    display: flex;
    flex-direction: column;
  `,
  input: css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.neutral.c300};
    border-radius: ${({ theme }) => theme.spacing[1]};
    color: ${({ theme }) => theme.colors.neutral.c900};
    padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.c700};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.neutral.c300};
    }

    &:focus-visible {
      ${({ theme }) => theme.shadows.input.focus}
      outline: none;
    }
  `,
  label: css`
    color: ${({ theme }) => theme.colors.neutral.c900};
  `,
};

export default textFieldTheme;
