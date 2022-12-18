import { ChangeEventHandler } from "react";

import { Base, Input, Label } from "./VTextField.styles";

interface Props {
  label?: string;
  labelId?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  [x: string]: any;
}

/**
 * Primary UI component for user input
 */
const VTextField = ({ label, labelId, name, onChange, ...rest }: Props) => {
  return (
    <Base>
      {label && <Label htmlFor={labelId}>{label}</Label>}
      <Input id={labelId} name={name} onChange={onChange} {...rest} />
    </Base>
  );
};

export default VTextField;
