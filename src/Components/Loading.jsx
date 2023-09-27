import React from "react";

const Loading = ({ children, error, loading }) => {
  return (
    <>
      {loading ? (
        <p colSpan={3}>loading please wite....</p>
      ) : error ? (
        <p colSpan={3}>{error}</p>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
