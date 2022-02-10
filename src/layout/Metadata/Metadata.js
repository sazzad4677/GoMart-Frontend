import React from "react";
import { Helmet } from "react-helmet";

const Metadata = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${title} - GoMart`}</title>
    </Helmet>
  );
};

export default Metadata;
