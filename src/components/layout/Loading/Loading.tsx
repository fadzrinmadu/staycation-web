"use client";

import { FC, useEffect, useState } from "react";

const messages = [
  "Finding the best places for you...",
  "Curating your top picks...",
  "Checking room availability...",
  "Almost there...",
];

const Loading: FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center min-h-screen gap-8 bg-white"
    >
      <svg
        width="220"
        height="80"
        viewBox="0 0 220 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="motion-reduce:[&_*]:!animate-none"
      >
        <path
          d="M10 60 C 60 60, 60 20, 110 20 C 160 20, 160 60, 210 60"
          stroke="#E5E5E5"
          strokeWidth="2"
          strokeDasharray="4 6"
          fill="none"
        />
        <g>
          <animateMotion
            dur="2.2s"
            repeatCount="indefinite"
            path="M10 60 C 60 60, 60 20, 110 20 C 160 20, 160 60, 210 60"
          />
          <circle r="7" fill="#111111" />
          <circle r="3" fill="#ffffff" />
        </g>
      </svg>

      <p
        key={messageIndex}
        className="text-sm text-neutral-600 tracking-wide animate-[fadeIn_0.4s_ease-in-out]"
      >
        {messages[messageIndex]}
      </p>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export { Loading };
