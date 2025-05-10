"use client";
import styles from "./mainButton.module.css";

interface IProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  selInductries?: boolean;
}

const MainButton = ({
  title,
  onClick,
  disabled = false,
  type = "button",
  className,
  selInductries,
}: IProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` ${styles.container} ${className}`}
      type={type}
      style={{ backgroundColor: selInductries ? "#52409A" : undefined }}
    >
      {title}
    </button>
  );
};

export default MainButton;
