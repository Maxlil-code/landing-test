import React from "react";

interface CustomButtonProps {
  text?: string;
  skin: "primary" | "border" | "transparent";
  type: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  skin,
  type,
  icon,
  onClick,
}) => {
  return (
    <button className={`custom-button ${skin}`} type={type} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
      {text && <span className="text">{text}</span>}
    </button>
  );
};

export default CustomButton;