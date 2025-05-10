"use client";
import React from "react";
import { Controller } from "react-hook-form";
import InputField from "../inputField/inputField";
import MainButton from "../mainButton/mainButton";
import EyeIcon from "@/app/assets/svgs/eye.svg";
import CloseEyeIcon from "@/app/assets/svgs/closeEye.svg";
import registerFormHooks from "./registerForm.hooks";
import styles from "./registerForm.module.css";

interface IProps {
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm: React.FC<IProps> = ({ setIsLoginForm }) => {
  const {
    setSecureTextEntry,
    secureTextEntry,
    handleSubmit,
    control,
    onSubmit,
    errors,
    loginLoading,
  } = registerFormHooks({setIsLoginForm});
  return (
    <div className={styles.container}>
      <div className={styles.formItemContainer}>
        <span className={styles.formLabel}>{"Name"}</span>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              type="text"
              valid={errors.email?.message ? true : false}
              value={value || ""}
              onChange={onChange}
              placeholderText={"fill"}
            />
          )}
          name="name"
          rules={{
            required: {
              value: true,
              message: "Required field",
            },
            minLength: {
              value: 2,
              message: "Must be 2 symbols",
            },
          }}
        />
      </div>
      {errors.name ? (
        <span className={styles.errorMessageText}>
          {errors.name.message?.toString()}
        </span>
      ) : (
        <div className={styles.errorMessageText}></div>
      )}
      <div className={styles.formItemContainer}>
        <span className={styles.formLabel}>{"Surname"}</span>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              type="text"
              valid={errors.email?.message ? true : false}
              value={value || ""}
              onChange={onChange}
              placeholderText={"fill"}
            />
          )}
          name="surname"
          rules={{
            required: {
              value: true,
              message: "Required field",
            },
            minLength: {
              value: 2,
              message: "Must be 2 symbols",
            },
          }}
        />
      </div>
      {errors.surname ? (
        <span className={styles.errorMessageText}>
          {errors.surname.message?.toString()}
        </span>
      ) : (
        <div className={styles.errorMessageText}></div>
      )}
      <div className={styles.formItemContainer}>
        <span className={styles.formLabel}>{"Phone Number"}</span>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              type="number"
              valid={errors.email?.message ? true : false}
              value={value || ""}
              onChange={onChange}
              placeholderText={"fill"}
            />
          )}
          name="phoneNumber"
          rules={{
            required: {
              value: true,
              message: "Required field",
            },
          }}
        />
      </div>
      {errors.phoneNumber ? (
        <span className={styles.errorMessageText}>
          {errors.phoneNumber.message?.toString()}
        </span>
      ) : (
        <div className={styles.errorMessageText}></div>
      )}
      <div className={styles.formItemContainer}>
        <span className={styles.formLabel}>{"Email"}</span>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              type="email"
              valid={errors.email?.message ? true : false}
              value={value || ""}
              onChange={onChange}
              placeholderText={"fill"}
            />
          )}
          name="email"
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g,
              message: "Email is incorrect",
            },
          }}
        />
      </div>
      {errors.email ? (
        <span className={styles.errorMessageText}>
          {errors.email.message?.toString()}
        </span>
      ) : (
        <div className={styles.errorMessageText}></div>
      )}
      <div className={styles.formItemContainer}>
        <span className={styles.formLabel}>{"Password"}</span>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputField
              type={secureTextEntry ? "password" : "text"}
              value={value || ""}
              valid={errors.password?.message ? true : false}
              onChange={onChange}
              placeholderText={"fill"}
              rightIcon={!secureTextEntry ? EyeIcon : CloseEyeIcon}
              onPressRightIcon={() => {
                setSecureTextEntry(!secureTextEntry);
              }}
            />
          )}
          name="password"
          rules={{
            required: {
              value: true,
              message: "Empty Password",
            },
            minLength: {
              value: 6,
              message: "Must be 6 symbols",
            },
          }}
        />
      </div>
      {errors.password ? (
        <span className={styles.errorMessageText}>
          {errors.password.message?.toString()}
        </span>
      ) : (
        <div className={styles.errorMessageText}></div>
      )}
      <MainButton
        title={"Create Account"}
        onClick={handleSubmit(onSubmit)}
        className={styles.selectButton}
        disabled={loginLoading}
      />
    </div>
  );
};

export default RegisterForm;
