import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #000000;
  font-family: 'Noto Sans', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;

  &.h1,
  &.h2,
  &.h3,
  &.h4,
  &.h5,
  &.h6 {
    font-family: 'Questrial', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    margin: 3rem 0 1.38rem;
  }

  &.h1 {
    font-size: 3.052rem;
    margin-top: 0;
  }

  &.h2 {
    font-size: 2.441rem;
  }

  &.h3 {
    font-size: 1.953rem;
  }

  &.h4 {
    font-size: 1.563rem;
  }

  &.h5 {
    font-size: 1.25rem;
  }

  &.h6 {
    font-size: 1.1rem;
  }

  &.subtitle {
    font-size: 1rem;
  }

  &.p {
    margin-bottom: 1rem;
  }

  &.small {
    font-size: 0.8rem;
  }
`;
