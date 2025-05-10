import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore  = await cookies();
  const activeUser = cookieStore?.get("activeUser");
  redirect(activeUser ? "/dashboard" : "/login");
}
