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
    padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};

    &::placeholder {
      color: ${({ theme }) => theme.colors.text.c200};
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.surface.c300};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.surface.c200};
      outline: none;
    }
  `,
  label: css`
    color: ${({ theme }) => theme.colors.text.c500};
  `,
};

export default textFieldTheme;
