"use client"; // Error components must be Client Components

import React from "react";

const Error = () => {
  return (
    <main style={{ clear: "both" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h2>Error:</h2>
        <p>Could not find Page</p>
      </div>
    </main>
  );
};

export default Error;
