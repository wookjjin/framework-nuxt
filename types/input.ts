export interface IBaseInputProps {
  placeholder?: string;
  label?: string;
  width?: string;
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  minlength?: string;
  maxlength?: string;
  showCount?: boolean;
  readonly?: boolean
}

export interface IBasicInputProps extends IBaseInputProps {
  type: 'text' | 'textarea' | 'password';
  showPasswordOn?: boolean;
  usePassword?: boolean;
  usePrefix?: boolean;
  preIconName?: string;
  size?: string;
  isSearch?: boolean
}

export interface INumberInputProps extends IBaseInputProps {
  type: 'text';
  usePrefix?: boolean;
  preIconName?: string;
  useSuffix?: boolean;
  sufIconName?: string;
  size?: string;
  useText?: boolean;
  displayText?: string;
  remainCount?: number | string | null;
  remainYn?: 'Y' | 'N'
}
