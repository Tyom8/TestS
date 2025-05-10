import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthForm from "../components/authForm/authForm";
import styles from "./login.module.css";

const LoginPage: React.FC = async () => {
  const cookieStore = await cookies();
  const activeUser = cookieStore.get("activeUser");
  if (activeUser) {
    redirect("/dashboard");
  }
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <span className={styles.title}>Welcome</span>
        <span className={styles.description}>Create an account or log in</span>
        <AuthForm />
      </div>
    </div>
  );
};
export default LoginPage;
