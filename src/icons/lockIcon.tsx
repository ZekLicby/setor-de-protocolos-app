import { IconProps } from "@/types/iconTypes";

interface LockIconProps extends IconProps {}

export const LockIcon = ({
  width = 24,
  height = 24,
  color = "black",
}: LockIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7 8.0332H2.3C1.58204 8.0332 1 8.66296 1 9.4398V17.8794C1 18.6562 1.58204 19.286 2.3 19.286H12.7C13.418 19.286 14 18.6562 14 17.8794V9.4398C14 8.66296 13.418 8.0332 12.7 8.0332Z"
        stroke={color}
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.0502 8.03297V5.92308C12.0502 4.61739 11.5709 3.36519 10.7175 2.44194C9.86425 1.51868 8.70693 1 7.5002 1C6.29346 1 5.13615 1.51868 4.28286 2.44194C3.42957 3.36519 2.9502 4.61739 2.9502 5.92308V8.03297"
        stroke="black"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5001 14.3626C7.85908 14.3626 8.1501 14.0478 8.1501 13.6594C8.1501 13.2709 7.85908 12.9561 7.5001 12.9561C7.14112 12.9561 6.8501 13.2709 6.8501 13.6594C6.8501 14.0478 7.14112 14.3626 7.5001 14.3626Z"
        stroke="black"
        stroke-width="1.71429"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
