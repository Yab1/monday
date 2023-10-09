import { DeleteType } from "@/enum";

const dialogHeaderText: Record<DeleteType, string> = {
  [DeleteType.Project]: "Confirm Project Deletion",
  [DeleteType.Group]: "Confirm Group Deletion",
  [DeleteType.Task]: "Confirm Task Deletion",
  [DeleteType.Account]: "Confirm Account Deletion",
};

export default dialogHeaderText;
