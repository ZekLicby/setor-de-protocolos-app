import { IconProps } from "@/types/iconTypes";

interface ConsultIconProps extends IconProps {}

export const ConsultIcon = ({
  width = 24,
  height = 24,
  color = "white",
}: ConsultIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 21V5.16667C40 4.32681 39.6664 3.52136 39.0725 2.9275C38.4786 2.33363 37.6732 2 36.8333 2H5.16667C4.32681 2 3.52136 2.33363 2.9275 2.9275C2.33363 3.52136 2 4.32681 2 5.16667V36.8333C2 37.6732 2.33363 38.4786 2.9275 39.0725C3.52136 39.6664 4.32681 40 5.16667 40H21"
        stroke={color}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29.4447 35.777C32.9425 35.777 35.778 32.9415 35.778 29.4437C35.778 25.9459 32.9425 23.1104 29.4447 23.1104C25.9469 23.1104 23.1113 25.9459 23.1113 29.4437C23.1113 32.9415 25.9469 35.777 29.4447 35.777Z"
        stroke={color}
        stroke-width="4"
      />
      <path
        d="M34.7221 33.6673L39.9999 37.8895M10.4443 12.5562H31.5554M10.4443 21.0006H18.8888"
        stroke={color}
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
