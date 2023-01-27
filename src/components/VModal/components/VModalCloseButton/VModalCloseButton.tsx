import VCloseIcon from "../../../../icons/VCloseIcon";
import VIconButton from "../../../VIconButton";

interface Props {
  onClick: () => void;
}

const VModalCloseButton = ({ onClick }: Props) => {
  return (
    <VIconButton onClick={onClick}>
      <VCloseIcon />
    </VIconButton>
  );
};

export default VModalCloseButton;
