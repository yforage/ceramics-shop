import React from "react";

interface IOpenQuoteIconProps {
  className?: string;
}

const OpenQuoteIcon: React.FC<IOpenQuoteIconProps> = ({ className }) => (
  <svg className={className} width="801" height="382" viewBox="0 0 801 382" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M710.001 379C827.546 221.524 808.001 113 746.001 55.0001C684 -2.99999 600 -19 494 55.0001C388.001 129 430 245 494 263C558 281 594 263 642.001 235" stroke="#A0B5AA" stroke-width="25"/>
    <path d="M285.695 378.681C403.24 221.205 383.695 112.681 321.695 54.6806C259.694 -3.31951 175.694 -19.3195 69.6948 54.6806C-36.3048 128.681 5.6948 244.681 69.6948 262.681C133.695 280.681 169.695 262.681 217.695 234.681" stroke="#A0B5AA" stroke-width="25"/>
  </svg>
)

export default OpenQuoteIcon;