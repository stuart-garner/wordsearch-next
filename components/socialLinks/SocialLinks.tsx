import Link from "next/link";
import React, { ReactNode } from "react";
import Facebook from "../logos/Facebook";
import GitHub from "../logos/GitHub";
import Instagram from "../logos/Instagram";
import LinkedIn from "../logos/LinkedIn";
import Twitter from "../logos/Twitter";
import { motion } from "framer-motion";

type PropsType = {
  colour: string;
};

type LinkPropTypes = {
  label: string;
  delay: number;
  href: string;
  children: ReactNode;
};

const SocialLink = (props: LinkPropTypes) => {
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

function SocialLinks(props: PropsType) {
  const { colour } = props;
  return (
    <div className="flex flex-wrap justify-start gap-10">
      <SocialLink
        delay={0}
        href="https://www.linkedin.com/in/stuartjgarner/"
        label="LinkedIn"
      >
        <LinkedIn style={`social-icons ${colour}`} />
      </SocialLink>

      <SocialLink
        delay={0.25}
        href="https://github.com/stuart-garner"
        label="GitHub"
      >
        <GitHub style={`social-icons ${colour}`} />
      </SocialLink>

      <SocialLink
        delay={0.5}
        href="https://www.instagram.com/stuart__garner/"
        label="Instagram"
      >
        <Instagram style={`social-icons ${colour}`} />
      </SocialLink>

      <SocialLink
        delay={0.75}
        href="https://www.facebook.com/stuartjgarner"
        label="Facebook"
      >
        <Facebook style={`social-icons ${colour}`} />
      </SocialLink>

      <SocialLink
        delay={1}
        href="https://twitter.com/stuartg5150"
        label="Twitter"
      >
        <Twitter style={`social-icons ${colour}`} />
      </SocialLink>
    </div>
  );
}

export default SocialLinks;
