import { motion } from "framer-motion";
import styled from "styled-components";

interface ImageProps {
  readonly height?: string;
  readonly width?: string;
}

export const Base = styled.div<ImageProps>`
  align-items: center;
  display: flex;
  height: ${({ height }) => height};
  justify-content: center;
  position: relative;
  width: ${({ width }) => width};
  ${({ theme }) => theme.components.image.base}
`;

export const Img = styled(motion.img)`
  height: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
