import { User } from "./index";

type status = "idle" | "loading" | "succeeded" | "failed";

export interface AuthInterfaces {
  isLogged: boolean;
  status: status;
  error: string;
  currentUser: User;
}
