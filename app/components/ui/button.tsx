import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  size?: string; // New prop
  variant?: string; // New prop
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = "", size, variant }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-600 text-white rounded ${className} ${size} ${variant}`}
  >
    {children}
  </button>
);

export { Button };
