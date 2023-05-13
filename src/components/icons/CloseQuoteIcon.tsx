import React from "react";

interface ICloseQuoteIconProps {
  className?: string;
}

const CloseQuoteIcon: React.FC<ICloseQuoteIconProps> = ({ className }) => (
  <svg className={className} width="801" height="382" viewBox="0 0 801 382" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M90.4723 379C-27.0731 221.524 -7.52826 113 54.4723 55.0001C116.473 -2.99999 200.473 -19 306.472 55.0001C412.472 129 370.472 245 306.472 263C242.472 281 206.472 263 158.472 235" stroke="#FDBCBC" stroke-width="25"/>
    <path d="M514.778 378.681C397.233 221.205 416.777 112.681 478.778 54.6806C540.779 -3.31951 624.779 -19.3195 730.778 54.6806C836.778 128.681 794.778 244.681 730.778 262.681C666.778 280.681 630.778 262.681 582.778 234.681" stroke="#FDBCBC" stroke-width="25"/>
  </svg>
)

export default CloseQuoteIcon;