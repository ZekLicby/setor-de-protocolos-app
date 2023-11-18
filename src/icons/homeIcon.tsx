import { IconProps } from "@/types/iconTypes";

interface HomeIconProps extends IconProps {}

export const HomeIcon = ({
  width = 24,
  height = 24,
  color = "#f8f8f8",
}: HomeIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.2135 18.6887L19.9481 0.416156C19.8238 0.284236 19.6761 0.179575 19.5136 0.108166C19.351 0.0367566 19.1768 0 19.0008 0C18.8248 0 18.6505 0.0367566 18.488 0.108166C18.3254 0.179575 18.1778 0.284236 18.0535 0.416156L0.788032 18.6887C0.285033 19.2214 0 19.945 0 20.6997C0 22.2668 1.20301 23.5409 2.68266 23.5409H4.50184V36.5794C4.50184 37.3652 5.10125 38 5.84317 38H16.3181V28.0558H21.0128V38H32.1584C32.9003 38 33.4997 37.3652 33.4997 36.5794V23.5409H35.3189C36.0315 23.5409 36.7147 23.2435 37.2177 22.7063C38.2615 21.5965 38.2615 19.7985 37.2135 18.6887Z"
        fill={color}
      />
    </svg>
  );
};