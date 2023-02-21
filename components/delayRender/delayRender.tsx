import React, { useState, useEffect, ReactElement } from "react";
import styles from "./delayRender.module.scss";

export type DelayRenderType = {
  children: ReactElement;
  delay: number;
  fade?: boolean;
  start?: boolean;
  onComplete?: ((value: number) => void) | null;
};

const DelayRender = (props: DelayRenderType) => {
  const [complete, setComplete] = useState(false);

  const { children, delay, onComplete, start, fade } = props;

  useEffect(() => {
    if (start) {
      const handleComplete = () => {
        if (onComplete && delay) onComplete(delay);
        setComplete(true);
      };

      setTimeout(() => handleComplete(), delay);
    }
  }, [start, delay, onComplete]);

  if (complete && delay && !fade) {
    return <div className={styles.delayRenderWrapper}>{children}</div>;
  }

  if (fade) {
    return (
      <div className={complete ? styles.show : styles.hide}>{children}</div>
    );
  }

  return null;
};

export default DelayRender;
