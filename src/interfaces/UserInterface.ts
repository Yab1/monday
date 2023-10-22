import { SettingEnum, SocialsEnum } from "@/enum";
import { Invitation, ProjectMember } from "@/interfaces";
interface User {
  id: string;
  name: string;
  picture: string;
  title: string;
  aboutMe: string;
  isOnline: boolean;
  ownedProjects: ProjectMember[];
  collaboratingProjects: ProjectMember[];
  invitations: Invitation[];
  socials: {
    [SocialsEnum.Facebook]: string;
    [SocialsEnum.GitHub]: string;
    [SocialsEnum.LinkedIn]: string;
    [SocialsEnum.Telegram]: string;
    [SocialsEnum.Twitter]: string;
  };
  settings: [
    {
      title: "account";
      options: {
        [SettingEnum.acceptsMyInvite]: boolean;
        [SettingEnum.sendsMeInvite]: boolean;
        [SettingEnum.mentionsMe]: boolean;
      };
    },
    {
      title: "application";
      options: {
        [SettingEnum.acceptsMyInvite]: boolean;
        [SettingEnum.sendsMeInvite]: boolean;
        [SettingEnum.mentionsMe]: boolean;
      };
    }
  ];
}

export default User;
