type PropType = {
  style: string;
};

const NextLogo = (props: PropType) => {
  const { style } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="512"
      height="512"
      viewBox="0, 0, 512, 512"
      className={style}
    >
      <defs>
        <linearGradient
          id="Gradient_1"
          gradientUnits="userSpaceOnUse"
          x1="344.178"
          y1="153.6"
          x2="344.162"
          y2="304"
        >
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
        <linearGradient
          id="Gradient_2"
          gradientUnits="userSpaceOnUse"
          x1="304.735"
          y1="331.378"
          x2="379.703"
          y2="456.533"
        >
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
      </defs>
      <g id="Layer_1">
        <g>
          <path d="M256,0 C397.385,0 512,114.615 512,256 C512.053,330.465 479.986,398.265 425.24,448.022 L355.664,358.4 L361.244,358.4 L361.244,153.6 L327.111,153.6 L327.111,321.621 L196.67,153.6 L153.6,153.6 L153.6,358.315 L188.056,358.315 L188.056,197.358 L398.176,468.836 C356.41,497.512 306.353,511.362 256,512 C114.615,512 -0,397.385 -0,256 C-0,114.615 114.615,0 256,0 z" />
        </g>
        <path
          d="M361.244,153.6 L361.244,358.4 L355.664,358.4 L327.111,321.621 L327.111,153.6 L361.244,153.6 z"
          fill="url(#Gradient_1)"
        />
        <path
          d="M425.267,448.057 L196.671,153.6 L153.6,153.6 L153.6,358.315 L188.056,358.315 L188.056,197.358 L398.219,468.892 C407.703,462.547 416.737,455.58 425.267,448.057 z"
          fill="url(#Gradient_2)"
        />
      </g>
    </svg>
  );
};

export default NextLogo;
