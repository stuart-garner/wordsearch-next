type PropType = {
  style: string;
};

const CSSLogo = (props: PropType) => {
  const { style } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      height="512"
      viewBox="0, 0, 512, 512"
      className={style}
    >
      <g>
        <path d="M201.643,488.309 L435.25,410.772 L512.764,23.691 L75.197,23.691 L58.554,110.059 L409.219,110.059 L398.301,165.204 L47.103,165.204 L29.926,251.573 L380.615,251.573 L361.353,350.435 L219.839,396.725 L97.565,350.435 L105.91,307.251 L19.542,307.251 L-0.764,410.772 L201.643,488.309" />
      </g>
    </svg>
  );
};

export default CSSLogo;
