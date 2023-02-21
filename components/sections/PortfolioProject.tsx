import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { RTNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import PortfolioTechStack from "../portfolioTechStack";

type PropsType = {
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
  description: [] | [RTNode, ...RTNode[]] | null | undefined;
  githublink?: any;
  live_link?: any;
  screenshot: any;
  next?: boolean;
  typescript?: boolean;
  tailwind?: boolean;
  prismic?: boolean;
  formspree?: boolean;
  vercel?: boolean;
  react?: boolean;
  wordpress?: boolean;
  php?: boolean;
  sass?: boolean;
  javascript?: boolean;
  css?: boolean;
  flow?: boolean;
  html?: boolean;
  mui?: boolean;
};

const PortfolioProject = (props: PropsType) => {
  const {
    title,
    description,
    screenshot,
    githublink,
    live_link,
    typescript,
    react,
    tailwind,
    wordpress,
    php,
    sass,
    javascript,
    css,
    flow,
    next,
    html,
    formspree,
    mui,
  } = props;

  return (
    <div className="flex flex-col gap-10 ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ repeat: 0, duration: 0.5 }}
      >
        <PrismicNextImage
          field={screenshot}
          className="project-image mt-10 rounded-xl lg:mt-0 lg:mb-0 "
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ repeat: 0, duration: 0.5 }}
      >
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />

        {(live_link.url || githublink.url) && (
          <div className="flex gap-2 pt-3">
            {live_link.url && (
              <Link
                className="button py-2 px-5"
                href="/#about-section"
                aria-label="Live project"
              >
                Live
              </Link>
            )}
            {githublink.url && (
              <Link
                className="button py-2 px-5"
                href="/#about-section"
                aria-label="Project repo"
              >
                GitHub
              </Link>
            )}
          </div>
        )}
        <PortfolioTechStack
          react={react}
          typescript={typescript}
          tailwind={tailwind}
          wordpress={wordpress}
          php={php}
          sass={sass}
          javascript={javascript}
          css={css}
          flow={flow}
          next={next}
          html={html}
          formspree={formspree}
          mui={mui}
        />
      </motion.div>
    </div>
  );
};

export default PortfolioProject;
