export interface IUser {
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  password: string;
  selectedIndustries?: number[];
}
export interface ILoginPayload {
  email: string;
  password: string;
}
export interface IIndustriesData {
  id: number;
  name: string;
}
