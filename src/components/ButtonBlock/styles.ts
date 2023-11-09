import { theme } from "@/styles/themes/themes";
import { BorderStylesProps } from "@/types/buttonTypes";
import styled from "styled-components";

interface ButtonBlockContinerProps {
  backgroundColor?: string;
  height?: number;
  width?: number;
  border?: {
    borderColor: string;
    borderStyle: BorderStylesProps;
    borderWidth: number;
  };
  borderRadius?: number;
  padding?: string;
  fontSize?: number;
  fontColor?: string;
}

export const ButtonBlockContiner = styled.button<ButtonBlockContinerProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `${theme.colors.neutral.white}`};

  height: ${({ height }) => (height ? `${height}px` : "auto")};

  width: ${({ width }) => (width ? `${width}px` : "auto")};

  border-color: ${({ border }) =>
    border?.borderColor ? border?.borderColor : "transparent"};

  border-style: ${({ border }) =>
    border?.borderStyle ? border?.borderStyle : "hidden"};

  border-width: ${({ border }) =>
    border?.borderWidth ? border?.borderWidth : "0px"};

  border-radius: ${({ border, borderRadius }) =>
    border && borderRadius ? borderRadius : "0"}px;

  padding: ${({ padding }) => (padding ? padding : "0px")};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};

  color: ${({ fontColor }) =>
    fontColor ? fontColor : `${theme.colors.neutral.black}`};

  cursor: pointer;
`;
