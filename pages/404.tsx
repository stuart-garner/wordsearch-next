import Head from "next/head";

import ErrorLayout from "../templates/errorLayout";
import ErrorSection from "../components/sections/ErrorSection";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>[STU] - Page Not Found</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ErrorLayout>
        <ErrorSection code="404" message="Page Not Found" />
      </ErrorLayout>
    </>
  );
};

export default Custom404;
