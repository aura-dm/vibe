import VSvgIcon from "../components/VSvgIcon";

const VWarningIcon = ({ ...rest }) => {
  return (
    <VSvgIcon {...rest}>
      <path
        d="M21.2659 20.998H2.73288C2.37562 20.998 2.04551 20.8074 1.86688 20.498C1.68825 20.1886 1.68825 19.8074 1.86688 19.498L11.1329 3.49799C11.3117 3.1891 11.6415 2.9989 11.9984 2.9989C12.3553 2.9989 12.6851 3.1891 12.8639 3.49799L22.1299 19.498C22.3084 19.8072 22.3085 20.1882 22.1301 20.4975C21.9518 20.8069 21.622 20.9976 21.2649 20.998H21.2659ZM11.9999 5.99799L4.46888 18.998H19.5329L11.9999 5.99799ZM12.9949 14.999H10.9949V9.99799H12.9949V14.999Z"
        fill="currentcolor"
      />
      <path d="M10.9999 16H12.9999V18H10.9999V16Z" fill="currentcolor" />
    </VSvgIcon>
  );
};

export default VWarningIcon;
