import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Header from "../components/header/header";
import IndustriesCard from "../components/industriesCard/industriesCard";
import styles from "./dashboard.module.css";

const DashboardPage: React.FC = async () => {
  const cookieStore = await cookies();
  const activeUser = cookieStore.get("activeUser");
  if (!activeUser) {
    redirect("/login");
  }
  return (
    <div className={styles.container}>
      <Header userMail={activeUser.value} />
      <div className={styles.industriesContainer}>
        <IndustriesCard />
      </div>
    </div>
  );
};
export default DashboardPage;
