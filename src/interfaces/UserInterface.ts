import { UserTypeEnum } from "@/enum";

export interface UserInterface {
  id: string;
  name: string;
  profile: string;
  position: string;
  type: UserTypeEnum;
  isAuthenticated: boolean;
}
