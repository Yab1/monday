import { SettingEnum, SocialsEnum } from "@/enum";
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

export interface IUser extends IUserData, IUserSettings {
  id: string;
}
