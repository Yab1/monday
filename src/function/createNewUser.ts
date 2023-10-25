import { User } from "firebase/auth";
import { IUser, IProjectMember, IInvitation } from "@/interfaces";
import { SettingEnum, SocialsEnum } from "@/enum";

function createNewUser(user: User): IUser {
  const newUser: IUser = {
    id: user.uid,
    name: user.displayName!,
    photoURL: user.photoURL!,
    email: user.email!,
    title: "",
    aboutMe: "",
    isOnline: true,
    ownedProjects: [] as IProjectMember[],
    collaboratingProjects: [] as IProjectMember[],
    invitations: [] as IInvitation[],
    socials: {
      [SocialsEnum.Facebook]: "",
      [SocialsEnum.GitHub]: "",
      [SocialsEnum.LinkedIn]: "",
      [SocialsEnum.Telegram]: "",
      [SocialsEnum.Twitter]: "",
    },
    settings: [
      {
        title: "account",
        options: {
          [SettingEnum.acceptsMyInvite]: true,
          [SettingEnum.sendsMeInvite]: false,
          [SettingEnum.mentionsMe]: true,
        },
      },
      {
        title: "application",
        options: {
          [SettingEnum.acceptsMyInvite]: true,
          [SettingEnum.sendsMeInvite]: false,
          [SettingEnum.mentionsMe]: true,
        },
      },
    ],
  };
  return newUser;
}

export default createNewUser;
