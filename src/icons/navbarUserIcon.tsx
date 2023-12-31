import { IconProps } from "@/types/iconTypes";

interface NavbarUserIconProps extends IconProps {}

export const NavbarUserIcon = ({
  width = 24,
  height = 24,
  color = "white",
}: NavbarUserIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 0C21.5196 0 23.9359 1.00089 25.7175 2.78249C27.4991 4.56408 28.5 6.98044 28.5 9.5C28.5 12.0196 27.4991 14.4359 25.7175 16.2175C23.9359 17.9991 21.5196 19 19 19C16.4804 19 14.0641 17.9991 12.2825 16.2175C10.5009 14.4359 9.5 12.0196 9.5 9.5C9.5 6.98044 10.5009 4.56408 12.2825 2.78249C14.0641 1.00089 16.4804 0 19 0ZM19 23.75C29.4975 23.75 38 28.0013 38 33.25V38H0V33.25C0 28.0013 8.5025 23.75 19 23.75Z"
        fill={color}
      />
    </svg>
  );
};
