import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

export enum SocialsEnum {
  FACEBOOK = "Facebook",
  GITHUB = "GitHub",
  LINKEDIN = "LinkedIn",
  TELEGRAM = "Telegram",
  WEBSITE = "Website",
  X = "X",
}

export const SocialIconComponents = {
  [SocialsEnum.FACEBOOK]: BiLogoFacebook,
  [SocialsEnum.GITHUB]: BiLogoGithub,
  [SocialsEnum.LINKEDIN]: BiLogoLinkedin,
  [SocialsEnum.TELEGRAM]: BiLogoTelegram,
  [SocialsEnum.WEBSITE]: BiLogoTelegram,
  [SocialsEnum.X]: RiTwitterXFill,
};

export const SocialIconColors = {
  [SocialsEnum.FACEBOOK]: "#1178f2",
  [SocialsEnum.GITHUB]: "#333333",
  [SocialsEnum.LINKEDIN]: "#0a66c2",
  [SocialsEnum.TELEGRAM]: "#1DA1F2",
  [SocialsEnum.WEBSITE]: "#1DA1F2",
  [SocialsEnum.X]: "#333333",
};
