import { ButtonBlockProps } from "@/types/buttonTypes";
import { ButtonBlockContiner } from "./styles";

export const ButtonBlock = ({
  backgroundColor,
  height,
  width,
  border,
  borderRadius,
  textContent,
  padding,
  fontSize,
  fontColor,
  onClick,
}: ButtonBlockProps) => {
  return (
    <ButtonBlockContiner
      backgroundColor={backgroundColor}
      height={height}
      width={width}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
      fontSize={fontSize}
      fontColor={fontColor}
      onClick={onClick}
    >
      {textContent || "Sem texto definido"}
    </ButtonBlockContiner>
  );
};
