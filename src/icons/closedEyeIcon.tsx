import { IconProps } from "@/types/iconTypes";

interface ClosedEyeIconProps extends IconProps {}

export const ClosedEyeIcon = ({
  width = 24,
  height = 24,
  color = "#929292",
}: ClosedEyeIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.77706 6.56223C8.60981 5.41381 10.7335 4.56055 13.0001 4.56055C18.1509 4.56055 22.5633 8.96665 24.5017 11.2298C24.8078 11.5978 24.9773 12.0759 24.9773 12.5717C24.9773 13.0674 24.8078 13.5455 24.5017 13.9135C23.4332 15.161 21.6129 17.0596 19.3318 18.5125M15.7694 20.1726C14.8788 20.4323 13.9521 20.5827 13.0001 20.5827C7.84936 20.5827 3.43706 16.1767 1.49859 13.9135C1.19242 13.5455 1.02295 13.0674 1.02295 12.5717C1.02295 12.0759 1.19242 11.5978 1.49859 11.2298C2.11275 10.5128 2.97524 9.58061 4.03087 8.64165"
        stroke={color}
        stroke-opacity="0.12"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.6109 15.0888C17.0528 13.6984 17.0528 11.444 15.6109 10.0536C14.1689 8.66313 11.8311 8.66313 10.3892 10.0536"
        stroke={color}
        stroke-opacity="0.12"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 24.1429L1 1"
        stroke={color}
        stroke-opacity="0.12"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
