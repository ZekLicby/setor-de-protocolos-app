import { IconProps } from "@/types/iconTypes";

interface ArrowIconProps extends IconProps {}

export const ArrowIcon = ({
  width = 24,
  height = 24,
  color = "black",
}: ArrowIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.5783 25L30.1343 37.5L42.6903 25H17.5783Z" fill={color} />
    </svg>
  );
};
