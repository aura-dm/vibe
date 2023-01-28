import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

import { Base, Overlay, Panel } from "./VModal.styles";
import VModalCloseButton from "./components/VModalCloseButton";
import VModalContent from "./components/VModalContent";
import VModalHeader from "./components/VModalHeader";
import VModalTitle from "./components/VModalTitle";

interface Props {
  children: ReactNode;
  /**
   * Optional show the modal
   */
  isOpen?: boolean;
  /**
   * Optional maximum height of modal
   */
  maxHeight?: string;
  /**
   * Optional maximum width of modal
   */
  maxWidth?: string;
  /**
   * Click handler handling close click
   */
  onClose: () => void;
}

const ModalRoot = ({
  children,
  isOpen = false,
  maxHeight = "400px",
  maxWidth = "600px",
  onClose,
}: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          as={motion.div}
          open={isOpen}
          onClose={onClose}
          static
          style={{ position: "relative", zIndex: 50 }}
        >
          <Overlay
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <Base>
            <Panel
              animate={{ opacity: 1, transition: { ease: "easeOut" }, y: 0 }}
              exit={{ opacity: 0, transition: { ease: "easeIn" }, y: 100 }}
              initial={{ opacity: 0, y: 100 }}
              style={{ maxHeight, maxWidth }}
              transition={{ duration: 0.3 }}
            >
              <Dialog.Panel>{children}</Dialog.Panel>
            </Panel>
          </Base>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

// add child elements
const VModal = Object.assign(ModalRoot, {
  CloseButton: VModalCloseButton,
  Content: VModalContent,
  Header: VModalHeader,
  Title: VModalTitle,
});

export default VModal;
