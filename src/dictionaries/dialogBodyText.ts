import { DeleteEnum } from "@/enum";

const dialogBodyText: Record<DeleteEnum, string> = {
  [DeleteEnum.Project]:
    "Are you sure you want to delete this project? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [DeleteEnum.Group]:
    "Are you sure you want to delete this group? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [DeleteEnum.Task]:
    "Are you sure you want to delete this task? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [DeleteEnum.Account]:
    "Are you sure you want to delete this account? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
};

export default dialogBodyText;
