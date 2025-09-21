import React from "react";

const Overlay: React.FC = () => {
  return (
    <div 
      className="
        absolute z-10 top-0 left-0 right-0 bottom-0 
        bg-linear-[180deg,rgba(0,0,0,0)_53%,rgba(0,0,0,.50)_100%]
      "/>
  );
};

export { Overlay };
