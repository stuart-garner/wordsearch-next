import React, { ReactNode } from "react";
import Link from "next/link";
import FormspreeLogo from "../logos/FormspreeLogo";
import NextLogo from "../logos/NextLogo";
import Prismic from "../logos/Prismic";
import TailwindLogo from "../logos/TailwindLogo";
import TypeScriptLogo from "../logos/TypeScriptLogo";
import Vercel from "../logos/Vercel";
import ReactLogo from "../logos/ReactLogo";
import WordpressLogo from "../logos/WordpressLogo";
import PHPLogo from "../logos/PHPLogo";
import SassLogo from "../logos/SassLogo";
import JavaScriptLogo from "../logos/JavaScriptLogo";
import CSSLogo from "../logos/CSSLogo";
import FlowLogo from "../logos/FlowLogo";
import HTMLLogo from "../logos/HTMLLogo";
import MUILogo from "../logos/MUILogo";
import { motion } from "framer-motion";

type PropTypes = {
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

type LinkPropTypes = {
  label: string;
  delay: number;
  href: string;
  children: ReactNode;
};

const TechLink = (props: LinkPropTypes) => {
  const { children, delay, href, label } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        repeat: 0,
        duration: 0.5,
        delay,
      }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.25 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Link href={href} aria-label={label}>
        {children}
      </Link>
    </motion.div>
  );
};

function PortfolioTechStack({
  next,
  typescript,
  tailwind,
  prismic,
  formspree,
  vercel,
  react,
  wordpress,
  php,
  sass,
  javascript,
  css,
  flow,
  html,
  mui,
}: PropTypes) {
  return (
    <div className="flex  h-[80px] w-full flex-row flex-wrap items-center justify-start gap-5 pt-10">
      {css && <CSSLogo style="portfolio-tech-stack-logo" />}
      {flow && <FlowLogo style="portfolio-tech-stack-logo" />}
      {formspree && <FormspreeLogo style="portfolio-tech-stack-logo" />}
      {html && <HTMLLogo style="portfolio-tech-stack-logo" />}
      {javascript && <JavaScriptLogo style="portfolio-tech-stack-logo" />}
      {mui && <MUILogo style="portfolio-tech-stack-logo" />}
      {next && <NextLogo style="portfolio-tech-stack-logo" />}
      {php && <PHPLogo style="portfolio-tech-stack-logo" />}
      {prismic && <Prismic style="portfolio-tech-stack-logo" />}
      {react && <ReactLogo style="portfolio-tech-stack-logo" />}
      {sass && <SassLogo style="portfolio-tech-stack-logo" />}
      {tailwind && <TailwindLogo style="portfolio-tech-stack-logo" />}
      {typescript && <TypeScriptLogo style="portfolio-tech-stack-logo" />}
      {vercel && <Vercel style="portfolio-tech-stack-logo" />}
      {wordpress && <WordpressLogo style="portfolio-tech-stack-logo" />}
    </div>
  );
}

export default PortfolioTechStack;
