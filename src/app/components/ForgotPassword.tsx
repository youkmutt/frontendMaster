"use client";
import React from "react";

interface ForgotPasswordProps {
  // Renamed for clarity, though 'ForgotPassword' works
  onClick: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onClick }) => {
  return (
    <a
      onClick={onClick}
      className="
        bg-transparent 
        text-fa-primary
        text-sm 
        ease-in-out
        cursor-pointer
      "
    >
      Forgot password?
    </a>
  );
};

export default ForgotPassword;
