type PropType = {
  style: string;
};

const FormspreeLogo = (props: PropType) => {
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
        <path d="M256.006,0 C397.383,0 512,114.618 512,256 C512,397.393 397.383,512 256.006,512 C114.613,512 -0,397.393 -0,256 C-0,114.618 114.613,0 256.006,0 z M256.006,315.241 L139.634,315.241 L139.634,385.059 L256.006,385.059 L256.006,315.241 z M372.362,222.142 L139.634,222.142 L139.634,291.96 L372.362,291.96 L372.362,222.142 z M372.362,129.059 L139.634,129.059 L139.634,198.877 L372.362,198.877 L372.362,129.059 z" />
      </g>
    </svg>
  );
};

export default FormspreeLogo;
