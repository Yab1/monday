import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTelegram,
} from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

export enum SocialsEnum {
  Facebook = "Facebook",
  GitHub = "GitHub",
  LinkedIn = "LinkedIn",
  Telegram = "Telegram",
  X = "X",
}

export const SocialIconComponents = {
  [SocialsEnum.Facebook]: BiLogoFacebook,
  [SocialsEnum.GitHub]: BiLogoGithub,
  [SocialsEnum.LinkedIn]: BiLogoLinkedin,
  [SocialsEnum.Telegram]: BiLogoTelegram,
  [SocialsEnum.X]: RiTwitterXFill,
};

export const SocialIconColors = {
  [SocialsEnum.Facebook]: "#1178f2",
  [SocialsEnum.GitHub]: "#333333",
  [SocialsEnum.LinkedIn]: "#0a66c2",
  [SocialsEnum.Telegram]: "#1DA1F2",
  [SocialsEnum.X]: "#333333",
};
