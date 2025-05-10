"use client";
import LoginForm from "../loginForm/loginForm";
import MainButton from "../mainButton/mainButton";
import RegisterForm from "../registerForm/registerForm";
import authFormHooks from "./authForm.hooks";
import styles from "./autoForm.module.css";

const AuthForm = () => {
  const { isLoginForm, setIsLoginForm } = authFormHooks();
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <MainButton
          onClick={() => setIsLoginForm(true)}
          title="Log In"
          className={isLoginForm ? styles.selectButton : undefined}
        />
        <MainButton
          onClick={() => setIsLoginForm(false)}
          title="Register"
          className={isLoginForm ? undefined : styles.selectButton}
        />
      </div>
      {isLoginForm ? <LoginForm /> : <RegisterForm setIsLoginForm={setIsLoginForm}/>}
    </div>
  );
};

export default AuthForm;
