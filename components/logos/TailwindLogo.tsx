type PropType = {
  style: string;
};

const TailwindLogo = (props: PropType) => {
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
      <g>
        <path d="M256,102.2 C192.8,102.2 153.3,136.378 137.5,204.733 C161.2,170.556 188.85,157.739 220.45,166.283 C238.48,171.158 251.366,185.305 265.63,200.965 C288.867,226.475 315.76,256 374.5,256 C437.7,256 477.2,221.822 493,153.467 C469.3,187.644 441.65,200.461 410.05,191.917 C392.02,187.042 379.134,172.895 364.87,157.235 C341.633,131.725 314.74,102.2 256,102.2 z M137.5,256 C74.3,256 34.8,290.178 19,358.533 C42.7,324.356 70.35,311.539 101.95,320.083 C119.98,324.958 132.866,339.105 147.13,354.765 C170.367,380.275 197.26,409.8 256,409.8 C319.2,409.8 358.7,375.622 374.5,307.267 C350.8,341.444 323.15,354.261 291.55,345.717 C273.52,340.842 260.634,326.695 246.37,311.035 C223.133,285.525 196.24,256 137.5,256 z" />
      </g>
    </svg>
  );
};

export default TailwindLogo;
