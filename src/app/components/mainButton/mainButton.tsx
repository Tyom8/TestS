"use client";
import styles from "./mainButton.module.css";

interface IProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const MainButton = ({
  title,
  onClick,
  disabled = false,
  type = "button",
  className,
}: IProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` ${styles.container} ${className}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default MainButton;
