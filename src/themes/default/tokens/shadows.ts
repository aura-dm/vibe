import colors from "./colors";

const shadows = {
  input: {
    focus: `box-shadow: 0 0 0 2px ${colors.surface.c200};`,
  },
  modal: {
    sm: `filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));`,
    md: `filter: drop-shadow(0 2px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 2px rgb(0 0 0 / 0.06));`,
    lg: `filter: drop-shadow(0 5px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 2px 3px rgb(0 0 0 / 0.1));`,
    xl: `filter: drop-shadow(0 10px 20px rgb(0 0 0 / 0.03)) drop-shadow(0 3px 8px rgb(0 0 0 / 0.08));`,
  },
};

export default shadows;
