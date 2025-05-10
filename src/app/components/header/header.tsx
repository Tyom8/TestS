"use client"
import React from "react";
import Image from "next/image";
import LogoutIcon from "@/app/assets/svgs/logoutIcon.svg";
import styles from "./header.module.css";
import headerHooks from "./header.hooks";

interface IProps {
  userMail: string;
}

const Header: React.FC<IProps> = ({ userMail }) => {
  const { handleLogout } = headerHooks();
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <span className={styles.loggedText}>Logged in as</span>
        <span className={styles.emailText}>{userMail}</span>
      </div>
      <div className={styles.logoutContainer} onClick={handleLogout}>
        <Image src={LogoutIcon} alt="icon" />
        <span className={styles.logoutText}>Log Out</span>
      </div>
    </div>
  );
};
export default Header;
