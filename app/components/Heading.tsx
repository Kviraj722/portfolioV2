import React from "react";

type Props = { heading: string };

const Heading = (props: Props) => {
  return (
    <div className="font-mono text-3xl flex flex-col items-center justify-center p-2">
      <h1 className="">{props.heading}</h1>
      <div className="w-24 h-1 bg-red-500 rounded-full skew-x-6 -rotate-6"></div>
      <div className="w-20  h-1 bg-green-500 rounded-full skew-x-6 -rotate-6"></div>
    </div>
  );
};

export default Heading