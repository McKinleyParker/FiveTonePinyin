import React from "react";
import MetaTags from "react-meta-tags";

export default function Meta() {
  return (
    <MetaTags>
      <title>Hello!</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="./tilesStyle.css" />
    </MetaTags>
  );
}
