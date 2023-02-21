import React, { useEffect, ReactElement, useRef } from "react";

export type ScrollPositionType = {
  children: ReactElement;
  onComplete: () => void;
};

const ScrollPosition = (props: ScrollPositionType) => {
  const { children, onComplete } = props;

  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapper.current) {
        const { offsetTop } = wrapper.current;

        if (window.scrollY >= offsetTop - 400) {
          window.removeEventListener("scroll", handleScroll);
          onComplete();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onComplete]);

  return <div ref={wrapper}>{children}</div>;
};

export default ScrollPosition;
