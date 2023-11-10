import { IconProps } from "@/types/iconTypes";

interface UserIconProps extends IconProps {}

export const UserIcon = ({
  width = 24,
  height = 24,
  color = "black",
}: UserIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00007 9.14286C10.0332 9.14286 11.6813 7.32002 11.6813 5.07143C11.6813 2.82284 10.0332 1 8.00007 1C5.96698 1 4.31885 2.82284 4.31885 5.07143C4.31885 7.32002 5.96698 9.14286 8.00007 9.14286Z"
        stroke={color}
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 17.2853C14.5244 15.6453 13.5903 14.2147 12.3323 13.1996C11.0742 12.1846 9.5572 11.6377 7.99998 11.6377C6.44276 11.6377 4.92577 12.1846 3.66771 13.1996C2.40966 14.2147 1.47553 15.6453 1 17.2853H15Z"
        stroke="black"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
