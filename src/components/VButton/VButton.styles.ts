import styled from 'styled-components';

export const Wrapper = styled.button`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 3px;
  color: #222222;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #eeeeee;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #62b0e8;
  }

  &.is_primary {
    background-color: ${({ theme }) => theme?.colors.primary.c500};
    border: 1px solid ${({ theme }) => theme?.colors.primary.c500};
    color: #ffffff;

    &:hover {
      background-color: ${({ theme }) => theme?.colors.primary.c600};
      border: 1px solid ${({ theme }) => theme?.colors.primary.c600};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme?.colors.primary.c400};
    }
  }
`;
