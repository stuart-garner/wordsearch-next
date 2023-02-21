type PropTypes = {
  style: string;
};

const TopCurve = (props: PropTypes) => {
  const { style } = props;
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block h-[67px] w-full"
      >
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          className={style}
        ></path>
      </svg>
    </div>
  );
};

export default TopCurve;
