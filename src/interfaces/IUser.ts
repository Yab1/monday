import { SettingEnum, SocialsEnum, StatusEnum } from "@/enum";
export interface IUserData {
  name: string;
  photoURL: string;
  email: string;
  phoneNumber: string;
  title: string;
  aboutMe: string;
  socials: Record<SocialsEnum, string>;
}
export interface IUserSettings {
  account: Record<SettingEnum, boolean>;
  application: Record<SettingEnum, boolean>;
}

export interface IUser extends IUserData {
  id: string;
}

export interface IPrivateData {
  settings: IUserSettings;
  projectIds: string[];
}

export interface IUserState {
  user: IUser;
  privateData: IPrivateData;
  status: StatusEnum;
  error: unknown;
}
