import VSvgIcon from "../components/VSvgIcon";

const VSuccessIcon = ({ ...rest }) => {
  return (
    <VSvgIcon {...rest}>
      <path
        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM11.984 20H12C16.4167 19.9956 19.9942 16.4127 19.992 11.996C19.9898 7.57929 16.4087 4 11.992 4C7.57528 4 3.99421 7.57929 3.992 11.996C3.98979 16.4127 7.56729 19.9956 11.984 20ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
        fill="inherit"
      />
    </VSvgIcon>
  );
};

export default VSuccessIcon;
