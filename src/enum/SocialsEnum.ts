import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { BsGlobe } from "react-icons/bs";

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
  [SocialsEnum.WEBSITE]: BsGlobe,
  [SocialsEnum.X]: RiTwitterXFill,
};

export const SocialIconColors = {
  [SocialsEnum.FACEBOOK]: "bg-facebookBlue",
  [SocialsEnum.GITHUB]: "bg-githubGrey",
  [SocialsEnum.LINKEDIN]: "bg-linkedinBlue",
  [SocialsEnum.TELEGRAM]: "bg-telegramBlue",
  [SocialsEnum.WEBSITE]: "bg-websiteGrey",
  [SocialsEnum.X]: "bg-githubGrey",
};
