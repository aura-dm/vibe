import VLoading from "../VLoading/VLoading";
import { Base } from "./VLoadingScreen.styles";

interface Props {
  [x: string]: any;
}

/**
 * Display loading state centred on content
 */
const VLoadingScreen = ({ ...rest }: Props) => {
  return (
    <Base {...rest}>
      <VLoading />
    </Base>
  );
};

export default VLoadingScreen;
