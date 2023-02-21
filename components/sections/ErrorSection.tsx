import Link from "next/link";
import BottomWave from "../waves/Bottom";

type PropType = {
  code: string;
  message: string;
};

const HomePagePortfolio = (props: PropType) => {
  const { message, code } = props;
  return (
    <section
      id="page-not-found"
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <h1 className="font-[Orbitron] text-[100px] text-gray-900 md:text-[150px]">
        {code}
      </h1>
      <h1 className="text-center">{message}</h1>
      <div>
        <Link
          className="button"
          href="/"
          scroll={false}
          aria-label="Return Home"
        >
          Return Home
        </Link>
      </div>
      <BottomWave colour="fill-black" />
    </section>
  );
};

export default HomePagePortfolio;
