import React from "react";

interface StarIconProps {
  type: "filled" | "outlined";
}

const StarIcon: React.FC<StarIconProps> = (props: StarIconProps) => {
  const { type } = props;

  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1_285)">
      <rect width="36" height="36" fill="white"/>
      <path d="M17.0488 2.92717C17.3481 2.00586 18.6515 2.00586 18.9509 2.92717L21.8166 11.7468C21.9504 12.1589 22.3344 12.4378 22.7676 12.4378H32.0411C33.0099 12.4378 33.4127 13.6774 32.6289 14.2468L25.1265 19.6977C24.776 19.9523 24.6293 20.4037 24.7632 20.8157L27.6289 29.6354C27.9282 30.5567 26.8738 31.3228 26.0901 30.7534L18.5876 25.3026C18.2371 25.0479 17.7625 25.0479 17.412 25.3026L9.90958 30.7534C9.12587 31.3228 8.07139 30.5567 8.37074 29.6354L11.2364 20.8157C11.3703 20.4037 11.2236 19.9523 10.8731 19.6977L3.3707 14.2468C2.58699 13.6774 2.98976 12.4378 3.95848 12.4378H13.232C13.6652 12.4378 14.0492 12.1589 14.1831 11.7468L17.0488 2.92717Z" fill={type === "filled" ? "#FCE469" : "#E5E5E5"} />
      </g>
      <defs>
      <clipPath id="clip0_1_285">
      <rect width="36" height="36" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  );
};

export { StarIcon };
