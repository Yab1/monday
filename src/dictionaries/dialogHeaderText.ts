import { TargetEnum } from "@/enum";

const dialogHeaderText: Record<TargetEnum, string> = {
  [TargetEnum.Project]: "Confirm Project Deletion",
  [TargetEnum.Group]: "Confirm Group Deletion",
  [TargetEnum.Task]: "Confirm Task Deletion",
  [TargetEnum.Account]: "Confirm Account Deletion",
};

export default dialogHeaderText;
