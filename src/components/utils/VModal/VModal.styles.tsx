import { motion } from "framer-motion";
import styled from "styled-components";

export const Base = styled.div`
  ${({ theme }) => theme.components.modal.base}
`;

export const Overlay = styled(motion.div)`
  ${({ theme }) => theme.components.modal.overlay}
`;

export const Panel = styled(motion.div)`
  ${({ theme }) => theme.components.modal.panel}
`;
