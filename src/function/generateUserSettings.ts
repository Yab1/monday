import { IUserSettings } from "@/interfaces";
import { SettingEnum } from "@/enum";

function generateUserSettings(): IUserSettings {
  return {
    account: {
      [SettingEnum.ACCEPTS_MY_INVITE]: true,
      [SettingEnum.SENDS_ME_INVITE]: false,
      [SettingEnum.MENTIONS_ME]: true,
    },
    application: {
      [SettingEnum.ACCEPTS_MY_INVITE]: true,
      [SettingEnum.SENDS_ME_INVITE]: false,
      [SettingEnum.MENTIONS_ME]: true,
    },
  };
}

export default generateUserSettings;
