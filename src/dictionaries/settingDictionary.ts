import { SettingEnum } from "@/enum";

export const settingLabel: Record<SettingEnum, string> = {
  [SettingEnum.ACCEPTS_MY_INVITE]: "Email me when someone accepts my invite",
  [SettingEnum.SENDS_ME_INVITE]: "Email me when someone sends me an invite",
  [SettingEnum.MENTIONS_ME]: "Email me when someone mentions me",
};
