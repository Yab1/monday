import { User } from "firebase/auth";
import { IUserData } from "@/interfaces";
import { SocialsEnum } from "@/enum";

function generateUserData(user: User): IUserData {
  return {
    name: user.displayName!,
    photoURL: user.photoURL!,
    email: user.email!,
    phoneNumber: "",
    title: "",
    aboutMe: "",
    socials: {
      [SocialsEnum.FACEBOOK]: "",
      [SocialsEnum.GITHUB]: "",
      [SocialsEnum.LINKEDIN]: "",
      [SocialsEnum.TELEGRAM]: "",
      [SocialsEnum.WEBSITE]: "",
      [SocialsEnum.X]: "",
    },
  };
}

export default generateUserData;
