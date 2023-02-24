type PropType = {
  style: string;
};

const RenderLogo = (props: PropType) => {
  const { style } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      width="512"
      height="128"
      viewBox="0, 0, 512, 128"
      className={style}
    >
      <g>
        <path d="M44.912,50.116 C36.87,50.111 28.963,52.189 21.962,56.148 L21.962,123.116 C21.981,124.992 20.507,126.545 18.632,126.623 L3.331,126.623 C1.456,126.545 -0.018,124.992 0.001,123.116 L0.001,35.983 C0.028,34.155 1.504,32.68 3.331,32.652 L17.826,32.652 C19.654,32.68 21.129,34.155 21.156,35.983 L21.156,39.491 C28.012,34.275 36.393,31.46 45.008,31.479 C46.835,31.506 48.311,32.981 48.338,34.809 L48.338,46.779 C48.242,48.615 46.75,50.069 44.912,50.116 z" />
        <path d="M132.673,87.307 L78.399,87.307 L78.399,87.846 C78.399,97.476 82.357,109.002 98.381,109.002 C108.644,108.913 118.813,108.367 128.988,107.289 L129.527,107.289 C131.24,107.289 132.496,108.101 132.496,109.826 L132.496,120.807 C132.496,123.509 131.956,124.676 128.988,125.126 C118.35,127.228 107.515,128.164 96.674,127.918 C80.023,127.918 56.35,118.916 56.35,86.153 L56.35,73.821 C56.35,47.813 70.844,31.517 96.313,31.517 C121.966,31.517 135.921,48.98 135.921,73.821 L135.921,83.184 C136.004,85.854 135.001,87.307 132.673,87.307 z M113.859,71.017 C113.859,58.058 106.659,50.496 96.395,50.496 C86.132,50.496 78.57,57.785 78.57,71.017 L78.57,71.652 L113.852,71.652 z" />
        <path d="M228.351,126.541 L213.05,126.541 C211.175,126.462 209.701,124.91 209.72,123.033 L209.72,68.848 C209.72,54.353 208.369,50.217 195.587,50.217 C188.926,50.71 182.478,52.777 176.773,56.25 L176.773,123.217 C176.788,125.092 175.316,126.643 173.442,126.725 L158.142,126.725 C156.268,126.643 154.796,125.092 154.812,123.217 L154.812,36.078 C154.839,34.25 156.314,32.775 158.142,32.748 L172.637,32.748 C174.464,32.775 175.94,34.25 175.967,36.078 L175.967,39.586 C183.829,33.992 193.33,31.173 202.971,31.574 C226.911,31.574 231.776,47.686 231.776,68.842 L231.776,123.116 C231.684,124.968 230.203,126.449 228.351,126.541 z" />
        <path d="M323.311,123.68 C312.363,126.46 301.12,127.911 289.824,128 C263.005,128 250.039,112.142 250.039,86.235 L250.039,73.364 C250.039,47.356 262.998,31.599 289.824,31.599 C295.184,31.671 300.535,32.061 305.848,32.767 L305.848,3.333 C305.875,1.505 307.35,0.03 309.178,0.003 L324.478,0.003 C326.306,0.03 327.781,1.505 327.809,3.333 L327.809,119.24 C327.815,121.587 327.092,122.672 323.311,123.68 z M305.867,50.661 C300.554,49.956 295.203,49.566 289.844,49.494 C275.533,49.494 272.025,59.644 272.025,73.345 L272.025,86.127 C272.025,99.81 275.533,109.978 289.844,109.978 C295.207,109.996 300.563,109.606 305.867,108.811 z" />
        <path d="M422.864,87.307 L368.59,87.307 L368.59,87.846 C368.59,97.476 372.549,109.002 388.572,109.002 C398.836,108.913 409.004,108.367 419.179,107.289 L419.718,107.289 C421.336,107.289 422.687,108.101 422.687,109.826 L422.687,120.807 C422.687,123.509 422.148,124.676 419.179,125.126 C408.541,127.228 397.706,128.164 386.866,127.918 C370.214,127.918 346.541,118.916 346.541,86.153 L346.541,73.821 C346.541,47.813 361.035,31.517 386.504,31.517 C412.157,31.517 426.112,48.98 426.112,73.821 L426.112,83.184 C426.195,85.854 425.192,87.307 422.864,87.307 z M404.05,71.017 C404.05,58.058 396.85,50.496 386.587,50.496 C376.323,50.496 368.762,57.785 368.762,71.017 L368.762,71.652 L404.044,71.652 z" />
        <path d="M490.016,50.116 C481.973,50.11 474.066,52.189 467.065,56.148 L467.065,123.116 C467.084,124.992 465.61,126.545 463.735,126.623 L448.435,126.623 C446.561,126.542 445.089,124.991 445.104,123.116 L445.104,35.983 C445.132,34.155 446.607,32.68 448.435,32.652 L462.923,32.652 C464.751,32.68 466.226,34.155 466.253,35.983 L466.253,39.491 C473.109,34.275 481.49,31.46 490.104,31.479 C491.932,31.506 493.408,32.981 493.435,34.809 L493.435,46.779 C493.367,48.625 491.863,50.093 490.016,50.116 z" />
      </g>
    </svg>
  );
};
export default RenderLogo;