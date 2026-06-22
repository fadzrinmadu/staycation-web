import React, { FC } from "react";

const CalendarIcon: FC = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="23" height="21" rx="2" stroke="white" stroke-width="2"/>
    <path d="M0 8L25 8" stroke="white" stroke-width="2"/>
    <path d="M5 1L5 4" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <path d="M20 1L20 4" stroke="white" stroke-width="2" stroke-linecap="round"/>
    <mask id="path-5-inside-1_303_148" fill="white">
    <rect x="4" y="12" width="8" height="8" rx="1"/>
    </mask>
    <rect x="4" y="12" width="8" height="8" rx="1" stroke="white" stroke-width="4" mask="url(#path-5-inside-1_303_148)"/>
    <mask id="path-6-inside-2_303_148" fill="white">
    <rect x="13" y="12" width="8" height="8" rx="1"/>
    </mask>
    <rect x="13" y="12" width="8" height="8" rx="1" stroke="white" stroke-width="4" mask="url(#path-6-inside-2_303_148)"/>
    </svg>
  );
};

export { CalendarIcon };
