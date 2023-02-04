import VCloseIcon from "../../../../dataDisplay/icons/VCloseIcon";
import VIconButton from "../../../../inputs/VIconButton";

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
