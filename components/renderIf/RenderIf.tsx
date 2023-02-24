import { ReactNode } from "react";

type PropTypes = {
  isTrue: Boolean;
  children?: ReactNode;
};

const RenderIf = ({ isTrue, children }: PropTypes) => {
  return isTrue ? <>{children}</> : <></>;
};

export default RenderIf;
