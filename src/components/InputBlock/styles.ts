import { theme } from "@/styles/themes/themes";
import { BorderStylesProps } from "@/types/buttonTypes";
import styled from "styled-components";

interface InputProps {
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

interface PasswordInputAndIconProps {
  width?: number;
}

export const InputBlockContainer = styled.section``;

export const InputAndIconContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Input = styled.input<InputProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `${theme.colors.neutral["020"]}`};

  height: ${({ height }) => (height ? `${height}px` : "auto")};

  width: ${({ width }) => (width ? `${width}px` : "auto")};

  border-color: ${({ border }) =>
    border?.borderColor ? border?.borderColor : ""};

  border-style: ${({ border }) =>
    border?.borderStyle ? border?.borderStyle : "none"};

  border-width: ${({ border }) =>
    border?.borderWidth ? border?.borderWidth : ""};

  border-radius: ${({ border, borderRadius }) =>
    border && borderRadius ? borderRadius : "0px"};

  padding: ${({ padding }) => (padding ? padding : "0px")};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};

  color: ${({ fontColor }) =>
    fontColor ? fontColor : `${theme.colors.neutral.black}`};
`;

export const PasswordInputAndIcon = styled.section<PasswordInputAndIconProps>`
  display: flex;
  gap: 10px;
  background-color: ${theme.colors.neutral["020"]};
  padding: 12px 16px;
  width: 300px;

  width: ${({ width }) => (width ? `${width}px` : "auto")};

  &:focus-within {
    border: solid 2px black;
    border-radius: 4px;
  }
`;

export const PasswordInput = styled(Input)`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `transparent`};

  height: ${({ height }) => (height ? `${height}px` : "auto")};

  width: ${({ width }) => (width ? `${width}px` : "100%")};

  border-color: ${({ border }) =>
    border?.borderColor ? border?.borderColor : ""};

  border-style: ${({ border }) =>
    border?.borderStyle ? border?.borderStyle : ""};

  border-width: ${({ border }) =>
    border?.borderWidth ? border?.borderWidth : ""};

  border-radius: ${({ border, borderRadius }) =>
    border && borderRadius ? borderRadius : "0px"};

  padding: ${({ padding }) => (padding ? padding : "0px")};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};

  color: ${({ fontColor }) =>
    fontColor ? fontColor : `${theme.colors.neutral.black}`};

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.section`
  width: 24px;
  height: 24px;
`;
