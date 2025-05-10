import { useAppDispatch } from "@/app/store/hooks";
import { IUser } from "@/app/store/interfaces";
import { RegistrationApi } from "@/app/store/slices/authSlice";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface IProps {
  setIsLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default ({ setIsLoginForm }: IProps) => {
  const dispatch = useAppDispatch();
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IUser>();

  const onSubmit = async (payload: IUser) => {
    setLoginLoading(true);
    try {
      const result = await dispatch(RegistrationApi(payload)).unwrap();
      if (result === "User already exists") {
        toast.error(result);
      } else {
        toast.success("Success Registr");
        setIsLoginForm(true);
      }
    } catch (err) {
      toast.error("Registration failed");
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
