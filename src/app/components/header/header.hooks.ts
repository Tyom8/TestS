import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default () => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    document.cookie =
      "activeUser=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    router.push("/login");
  }, []);

  return {
    handleLogout,
  };
};
