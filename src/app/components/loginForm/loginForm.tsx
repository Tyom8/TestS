"use client";
import { Controller } from "react-hook-form";
import InputField from "../inputField/inputField";
import MainButton from "../mainButton/mainButton";
import EyeIcon from "@/app/assets/svgs/eye.svg";
import CloseEyeIcon from "@/app/assets/svgs/closeEye.svg";
import loginFormHooks from "./loginForm.hooks";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const {
    setSecureTextEntry,
    secureTextEntry,
    handleSubmit,
    control,
    onSubmit,
    errors,
    loginLoading,
  } = loginFormHooks();
  return (
    <div className={styles.container}>
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
        title={"Sign In"}
        onClick={handleSubmit(onSubmit)}
        className={styles.selectButton}
        disabled={loginLoading}
      />
    </div>
  );
};

export default LoginForm;
