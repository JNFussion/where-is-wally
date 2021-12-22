import React from "react";
import { Link } from "react-router-dom";

const Head = function () {
  return (
    <h1 className="p-4 text-5xl text-white">
      <Link to="/" className="font-luckiest-guy">
        Where&apos;s Wally?
      </Link>
    </h1>
  );
};

export default Head;
