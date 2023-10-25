import { SettingEnum, SocialsEnum } from "@/enum";
import { IInvitation, IProjectMember } from "@/interfaces";

interface IUser {
  id: string;
  name: string;
  photoURL: string;
  email: string;
  phoneNumber: string;
  title: string;
  aboutMe: string;
  isOnline: boolean;
  ownedProjects: IProjectMember[];
  collaboratingProjects: IProjectMember[];
  invitations: IInvitation[];
  socials: Record<SocialsEnum, string>;
  settings: {
    title: "account" | "application";
    options: Record<SettingEnum, boolean>;
  }[];
}

export default IUser;
