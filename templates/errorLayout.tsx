import { ReactNode } from "react";

import Header from "../components/header";

type Props = {
  children: ReactNode;
};

const ErrorLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default ErrorLayout;
