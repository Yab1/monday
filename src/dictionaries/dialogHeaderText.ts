import { DeleteEnum } from "@/enum";

const dialogHeaderText: Record<DeleteEnum, string> = {
  [DeleteEnum.Project]: "Confirm Project Deletion",
  [DeleteEnum.Group]: "Confirm Group Deletion",
  [DeleteEnum.Task]: "Confirm Task Deletion",
  [DeleteEnum.Account]: "Confirm Account Deletion",
};

export default dialogHeaderText;
