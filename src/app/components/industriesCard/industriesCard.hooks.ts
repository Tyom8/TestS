import { IIndustriesData, IUser } from "@/app/store/interfaces";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export default () => {
  const [isFocusedInput, setIsFocusedInput] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedIndustries, setSelectedIndustries] = useState<number[]>([]);

  useEffect(() => {
    const activeUser = document.cookie
      .split("; ")
      .find((row) => row.startsWith("activeUser="))
      ?.split("=")[1];
    if (activeUser) {
      const raw = localStorage.getItem("users");
      const users: IUser[] = raw ? JSON.parse(raw) : [];
      const currentUser = users.find((user) => user.email === activeUser);
      if (currentUser?.selectedIndustries) {
        setSelectedIndustries(currentUser.selectedIndustries);
      }
    }
  }, []);

  const industriesData: IIndustriesData[] = useMemo(() => {
    const industries = [
      { id: 1, name: "Life Insurance" },
      { id: 2, name: "SaaS" },
      { id: 3, name: "It Space" },
      { id: 4, name: "G Group" },
      { id: 5, name: "V Corp." },
    ];
    if (!searchValue) return industries;
    return industries.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue]);

  const handleSelectIndustry = useCallback(
    (industryId: number) => {
      setSelectedIndustries((prev) => {
        const isAlreadySelected = prev.includes(industryId);
        if (isAlreadySelected) {
          const updated = prev.filter((id) => id !== industryId);
          updateUserIndustriesInStorage(updated);
          return updated;
        }
        if (prev.length == 3) {
          toast.error("Max Length is 3");
          return prev;
        }
        const updated = [...prev, industryId];
        updateUserIndustriesInStorage(updated);
        return updated;
      });
    },
    [selectedIndustries]
  );

  const updateUserIndustriesInStorage = (newSelected: number[]) => {
    const activeUser = document.cookie
      .split("; ")
      .find((row) => row.startsWith("activeUser="))
      ?.split("=")[1];

    if (activeUser) {
      const raw = localStorage.getItem("users");
      const users: IUser[] = raw ? JSON.parse(raw) : [];
      const updatedUsers = users.map((user) =>
        user.email === activeUser
          ? { ...user, selectedIndustries: newSelected }
          : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  return {
    isFocusedInput,
    setIsFocusedInput,
    industriesData,
    searchValue,
    setSearchValue,
    selectedIndustries,
    handleSelectIndustry,
  };
};
