import React, { useRef, useEffect, useState, ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import Scrambler from "./Scrambler";

type TextToScramble = {
  children: ReactElement;
  delay: number;
  start?: boolean;
  onComplete?: () => void;
  placeHolder: string;
};

const ScrambledText = (props: TextToScramble) => {
  const scramblerRef = useRef(new Scrambler());
  const wrapper = useRef<HTMLDivElement>(null);

  const {
    children,
    delay = 2,
    onComplete = () => null,
    start,
    placeHolder = "",
  } = props;

  const [scrambledText, setScrambledText] = useState("");

  useEffect(() => {
    if (start) {
      scramblerRef.current.scramble(
        renderToStaticMarkup(children),
        setScrambledText,
        delay,
        onComplete,
        placeHolder
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, start]);

  return (
    <span
      ref={wrapper}
      dangerouslySetInnerHTML={{ __html: scrambledText }}
    ></span>
  );
};

export default ScrambledText;
