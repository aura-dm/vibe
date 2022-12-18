import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
      all: unset;
      display: revert;
  }

  *,
  *::before,
  *::after {
      box-sizing: border-box;
  }

  html {
    font-size: 14px;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily.primary}
  }

  a, button {
      cursor: revert;
  }

  ol, ul, menu {
      list-style: none;
  }

  img {
      max-width: 100%;
  }

  table {
      border-collapse: collapse;
  }

  input, textarea {
      -webkit-user-select: auto;
      user-select: auto;
  }

  textarea {
      white-space: revert;
  }

  meter {
      -webkit-appearance: revert;
      appearance: revert;
  }

  ::placeholder {
      color: unset;
  }

  :where([hidden]) {
      display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
      -moz-user-modify: read-write;
      -webkit-user-modify: read-write;
      overflow-wrap: break-word;
      -webkit-line-break: after-white-space;
    line-break: after-white-space;
      -webkit-user-select: auto;
    user-select: auto;
  }

  :where([draggable="true"]) {
      -webkit-user-drag: element;
  }
`;
