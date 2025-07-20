import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ text, fullWidth = false, link, onClick }) => {
  const baseClasses = `bg-primary text-background text-[16px] font-light py-2 px-[44px] transition-all duration-200 
    hover:bg-primary/20 hover:text-primary hover:border hover:border-primary 
    ${fullWidth ? "w-full rounded-none px-11" : "rounded-[40px]"}`;

  // If a "link" is provided, use <Link>, otherwise use <button>
  if (link) {
    return (
      <Link to={link} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
