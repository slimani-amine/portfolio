import { socials } from "@/portfolio";
import React from "react";

const Social = ({ containerStyle, iconStyles }) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => (
        <a
          href={social.path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
