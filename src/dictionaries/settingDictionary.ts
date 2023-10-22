import { SettingEnum } from "@/enum";

export const accountSettingLabel: Record<SettingEnum, string> = {
  [SettingEnum.acceptsMyInvite]: "Email me when someone accepts my invite",
  [SettingEnum.sendsMeInvite]: "Email me when someone sends me an invite",
  [SettingEnum.mentionsMe]: "Email me when someone mentions me",
};

export const applicationSettingLabel: Record<SettingEnum, string> = {
  [SettingEnum.acceptsMyInvite]:
    "Send me a notification when someone accepts my invite",
  [SettingEnum.sendsMeInvite]:
    "Send me a notification when someone sends me an invite",
  [SettingEnum.mentionsMe]: "Send me a notification when someone mentions me",
};
