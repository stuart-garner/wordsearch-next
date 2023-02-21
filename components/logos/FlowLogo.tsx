type PropType = {
  style: string;
};

const FlowLogo = (props: PropType) => {
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
        <path
          d="M466.041,221.171 L295.374,50.524 L466.041,50.524 z"
          opacity="0.7"
        />
        <path
          d="M175.841,0 L272.588,0 L346.528,73.92 L175.841,73.92 z"
          opacity="0.7"
        />
        <path
          d="M181.38,170.687 L10.714,0 L215.915,0 L215.915,170.667 L181.38,170.687 z M331.31,341.333 L501.976,512 L331.31,512 L331.31,341.333 z"
          opacity="0.9"
        />
        <path
          d="M215.915,341.354 L45.269,170.667 L215.936,170.667 L215.936,341.333 L215.915,341.354 z M399.71,254.975 L263.66,118.844 L399.771,118.844 L399.71,254.975 z M415.618,496.112 L260.839,341.354 L415.618,341.354 L415.618,496.112 z"
          opacity="0.7"
        />
        <path d="M215.915,135.949 L79.966,0 L215.915,0 z" opacity="0.9" />
        <path d="M261.529,341.333 L432.196,512 L261.529,512 z" opacity="0.8" />
        <path
          d="M434.266,409.47 L263.822,239.027 L434.266,239.027 z"
          opacity="0.7"
        />
        <path
          d="M263.66,118.844 L432.257,287.441 L263.66,287.441 z"
          opacity="0.9"
        />
        <path
          d="M215.915,511.33 L10.024,305.398 L215.915,305.398 z"
          opacity="0.7"
        />
      </g>
    </svg>
  );
};

export default FlowLogo;