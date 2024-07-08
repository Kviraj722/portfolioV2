import React from "react";

const Loading = () => {
  const divsArray = [
    { id: 4, color: "#28A745" },
    { id: 1, color: "#6A5ACD" },
    { id: 2, color: "#C08081" },
    { id: 3, color: "#9DC183" },
  ];

  return (
    <>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          .dot {
            animation: bounce 1s infinite ease-in-out;
          }
        `}
      </style>
      <div className="flex animate-pulse mt-5 ml-2">
        {divsArray.map((dot, index) => (
          <div
            key={dot.id}
            className="dot h-2 rounded-full w-2 mb-2"
            style={{
              backgroundColor: dot.color,
              animationDelay: `${index * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Loading;
