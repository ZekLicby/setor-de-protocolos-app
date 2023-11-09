export type BorderStylesProps =
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset"
  | "none"
  | "hidden";

export interface ButtonBlockProps {
  backgroundColor?: string;
  height?: number;
  width?: number;
  border?: {
    borderColor: string;
    borderStyle: BorderStylesProps;
    borderWidth: number;
  };
  borderRadius?: number;
  textContent: string;
  padding?: string;
  fontSize?: number;
  fontColor?: string;
  onClick?: () => void;
}
