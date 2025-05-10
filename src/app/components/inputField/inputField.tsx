import React, { ChangeEvent } from "react";
import styles from "./inputField.module.css";
import Image from "next/image";

type Props = {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onPressSelect?: () => void;
  secureTextEntry?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  placeholderText?: string;
  valid?: boolean;
  onPressRightIcon?: () => void;
  containerStyle?: string;
  inputContainerStyle?: string;
  multiline?: boolean;
  type?: React.HTMLInputTypeAttribute;
  maxLength?: number;
};

const InputField: React.FC<Props> = ({
  containerStyle,
  inputContainerStyle,
  value,
  onChange,
  onFocus,
  onBlur,
  rightIcon,
  leftIcon,
  placeholderText,
  valid,
  onPressRightIcon,
  multiline,
  type,
  maxLength,
}) => {
  return (
    <div className={`${styles.container} ${containerStyle}`}>
      {leftIcon && (
        <Image src={leftIcon} alt="icon" className={styles.leftIcon} />
      )}
      <input
        type={type ? type : "text"}
        value={value}
        onChange={onChange}
        className={`${styles.inputContainer} ${inputContainerStyle}`}
        onFocus={onFocus}
        onBlur={onBlur}
        multiple={multiline}
        placeholder={placeholderText}
        maxLength={maxLength}
        style={{ paddingLeft: leftIcon ? "36px" : "16px" }}
      />
      {rightIcon && (
        <div onClick={onPressRightIcon} className={styles.rigthIconContainer}>
          <Image src={rightIcon} alt="icon" className={styles.rigthIcon} />
        </div>
      )}
    </div>
  );
};
export default InputField;
