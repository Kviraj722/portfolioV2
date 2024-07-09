import { useState } from "react";

const ReadMore = ({ text, maxWords = 100 }:any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = text.split(" ");

  if (words.length <= maxWords) {
    return <p>{text}</p>;
  }

  return (
    <p>
      {isExpanded ? text : words.slice(0, maxWords).join(" ") + "..."}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 ml-2"
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
};

export default ReadMore;
