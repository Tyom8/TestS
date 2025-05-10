import { useState } from "react";

export default () => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  return {
    isLoginForm,
    setIsLoginForm,
  };
};
