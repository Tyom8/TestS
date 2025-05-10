import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { ILoginPayload, IUser } from "../interfaces";
import { toast } from "react-toastify";

interface IInitState {
  status: string;
}

const initialState: IInitState = {
  status: "",
};

export const LoginApi = createAsyncThunk(
  "auth/login",
  async (payload: ILoginPayload) => {
    try {
      const raw = localStorage.getItem("users");
      const users: IUser[] = raw ? JSON.parse(raw) : [];

      const foundUser = users.find(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );
      if (foundUser) {
        return foundUser;
      } else {
        toast.error("Incorect email or password!");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }
);

export const RegistrationApi = createAsyncThunk(
  "auth/registr",
  async (payload: IUser) => {
    try {
      const raw = localStorage.getItem("users");
      const users: IUser[] = raw ? JSON.parse(raw) : [];

      const userExists = users.some((user) => user.email === payload.email);
      if (userExists) {
        return "User already exists";
      } else {
        users.push(payload);
        localStorage.setItem("users", JSON.stringify(users));
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<any>) {},
});

export default authSlice.reducer;
