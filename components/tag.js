import React from "react";

const Tag = (props) => {
  return (
    <h1 className="p-4 2xl:p-6 bg-emerald-700 text-white font-poppins uppercase">
      {props.title}
    </h1>
  );
};

export default Tag;
