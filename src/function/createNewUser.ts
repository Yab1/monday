import { User } from "firebase/auth";
import { IUser, IProjectMember, IInvitation } from "@/interfaces";
import { SettingEnum, SocialsEnum } from "@/enum";

function createNewUser(user: User): IUser {
  const newUser: IUser = {
    id: user.uid,
    name: user.displayName!,
    photoURL: user.photoURL!,
    email: user.email!,
    phoneNumber:"",
    title: "Web Developer",
    aboutMe:
      "Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
    isOnline: true,
    ownedProjects: [] as IProjectMember[],
    collaboratingProjects: [] as IProjectMember[],
    invitations: [] as IInvitation[],
    socials: {
      [SocialsEnum.Facebook]: "",
      [SocialsEnum.GitHub]: "https://github.com/Yab1",
      [SocialsEnum.LinkedIn]: "",
      [SocialsEnum.Telegram]: "",
      [SocialsEnum.X]: "",
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
