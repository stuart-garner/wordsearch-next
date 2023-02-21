import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { RTNode } from "@prismicio/types";
import BottomWave from "../waves/Bottom";
import { motion } from "framer-motion";

type PropType = {
  heading: [] | [RTNode, ...RTNode[]] | null | undefined;
};

const HomePageIntro = (props: PropType) => {
  const { heading } = props;

  return (
    <section
      id="intro-section"
      className="h-screen min-h-[700px] md:min-h-[800px] xl:min-h-[600px] 2xl:max-h-[980px]"
    >
      <div className="container flex h-full items-center justify-between">
        <div className="flex flex-col gap-10 ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              repeat: 0,
              duration: 1,
            }}
          >
            <PrismicRichText field={heading} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              repeat: 0,
              duration: 1,
              delay: 1,
            }}
          >
            <Link
              className="button"
              href="/#about-section"
              scroll={false}
              aria-label="Learn More"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
      <BottomWave colour="fill-white" />
    </section>
  );
};

export default HomePageIntro;
