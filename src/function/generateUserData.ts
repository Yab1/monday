import { User } from "firebase/auth";
import { IUserData } from "@/interfaces";
import { SocialsEnum } from "@/enum";

function generateUserData(user: User): IUserData {
  return {
    name: user.displayName!,
    photoURL: user.photoURL!,
    email: user.email!,
    phoneNumber: "+251931470920",
    title: "Web Developer",
    aboutMe:
      "Hi, I'm a junior FrontEnd web developer living in Ethiopia, passionate about freelancing. When making decisions, I follow a simple rule: If I can't decide, the answer is no. In cases of two equally difficult paths, I opt for the more painful short-term option, as pain avoidance can be deceiving.",
    socials: {
      [SocialsEnum.FACEBOOK]: "",
      [SocialsEnum.GITHUB]: "https://github.com/Yab1",
      [SocialsEnum.LINKEDIN]: "https://www.linkedin.com/in/yab1/",
      [SocialsEnum.TELEGRAM]: "https://t.me/CasperWasTaken",
      [SocialsEnum.WEBSITE]: "https://yab1.vercel.app/",
      [SocialsEnum.X]: "",
    },
  };
}

export default generateUserData;
