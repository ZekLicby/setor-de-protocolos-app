import { IconProps } from "@/types/iconTypes";

interface EmailIconProps extends IconProps {}

export const EmailIcon = ({
  width = 24,
  height = 24,
  color = "black",
}: EmailIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_226_511)">
        <path
          d="M0.75 17.5L0.75 2.5L17.25 2.5V17.5H0.75Z"
          stroke={color}
          stroke-width="2"
          stroke-linejoin="round"
        />
        <path
          d="M0.75 16.667L6 10.0003L0.75 3.33366M17.25 3.33366L12 10.0003L17.25 16.667M5.25 10.0003H12.75"
          stroke={color}
          stroke-width="2"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_226_511">
          <rect
            width="20"
            height="18"
            fill="white"
            transform="matrix(0 -1 1 0 0 20)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
