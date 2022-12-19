import { ChangeEvent } from "react";

import { Base, Input, Label } from "./VTextField.styles";

interface Props {
  /**
   * Label text
   */
  label?: string;
  /**
   * Id that links the label to the input
   */
  labelId?: string;
  /**
   * Input element name
   */
  name?: string;
  /**
   * Optional change handler
   */
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Text displayed before user input
   */
  placeholder?: string;
  /**
   * Value to be displayed. `onChange` handler is required if value is set.
   */
  value?: string;
  [x: string]: any;
}

/**
 * Primary UI component for user input
 */
const VTextField = ({
  label,
  labelId,
  name,
  onChange,
  placeholder,
  value,
  ...rest
}: Props) => {
  return (
    <Base {...rest}>
      {label && <Label htmlFor={labelId}>{label}</Label>}
      <Input
        id={labelId}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </Base>
  );
};

export default VTextField;
