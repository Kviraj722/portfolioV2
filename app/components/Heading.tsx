import React from "react";

type Props = { heading: string };

const Heading = (props: Props) => {
  return (
    <div className="container mt-2 mb-2 font-mono text-xl sm:text-2xl md:text-3xl flex flex-col items-center justify-center p-2">
      <h1 className="text-center">{props.heading}</h1>
      <div className="flex flex-col items-center mt-2">
        <div className="w-24 h-1 bg-blue-500 rounded-full skew-x-6 -rotate-6"></div>
        <div className="w-20 h-1 bg-zinc-600 rounded-full skew-x-6 -rotate-6 mt-1"></div>
      </div>
    </div>
  );
};

export default Heading;
