import { Base } from "./VLoading.styles";

interface Props {
  size?: number;
  [x: string]: any;
}

/**
 * Display loading state
 */
const VLoading = ({ size = 32, ...rest }: Props) => {
  return <Base size={size} {...rest} />;
};

export default VLoading;
