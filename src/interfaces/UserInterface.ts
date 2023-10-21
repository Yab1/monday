import { UserTypeEnum } from "@/enum";
export interface UserInterface {
  id: string;
  name: string;
  profile: string;
  position: string;
  type: UserTypeEnum;
  isAuthenticated: boolean;
  isOnline: boolean;
  settings: {
    inviteAcceptanceNotifications: boolean;
    incomingInviteNotifications: boolean;
    mentionNotifications: boolean;
  };
}
