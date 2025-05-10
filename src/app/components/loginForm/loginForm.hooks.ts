import { useAppDispatch } from "@/app/store/hooks";
import { ILoginPayload } from "@/app/store/interfaces";
import { LoginApi } from "@/app/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginPayload>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (payload: ILoginPayload) => {
    setLoginLoading(true);
    try {
      const result = await dispatch(LoginApi(payload)).unwrap();
      if (result) {
        document.cookie = `activeUser=${result.email}; path=/`;
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error("Unknown Error");
    } finally {
      setLoginLoading(false);
    }
  };

  return {
    setSecureTextEntry,
    secureTextEntry,
    handleSubmit,
    control,
    onSubmit,
    errors,
    loginLoading,
  };
};
