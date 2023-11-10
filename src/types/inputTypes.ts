import { BorderStylesProps } from "./buttonTypes";

type InputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputBlockProps {
  type?: InputTypes;
  isChecked?: boolean;
  isDisabled?: boolean;
  isReadonly?: boolean;
  isRequired?: boolean;
  min?: string;
  max?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  value?: string | number;
  externalIcon?: React.ReactNode;
  width?: number;
  height?: number;
  backgroundColor?: string;
  padding?: string;
  fontSize?: number;
  fontColor?: string;
  placeholderColor?: string;
  border?: {
    borderColor: string;
    borderStyle: BorderStylesProps;
    borderWidth: number;
  };
  borderRadius?: number;
}
