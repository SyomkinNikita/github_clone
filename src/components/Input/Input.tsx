import React, { ChangeEvent, FC } from "react";

export type InputProps = {
  value: string | number;
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

export const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
  disabled,
}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
