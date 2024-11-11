import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = ({ loader }) => {
  return (
    <>
      <div id="overlay" style={{ display: loader }}>
        <div class="spinner"></div>
        <br />
      </div>
    </>
  );
};
export default Loader;
