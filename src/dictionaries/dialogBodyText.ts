import { TargetEnum } from "@/enum";

const dialogBodyText: Record<TargetEnum, string> = {
  [TargetEnum.Project]:
    "Are you sure you want to delete this project? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [TargetEnum.Group]:
    "Are you sure you want to delete this group? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [TargetEnum.Task]:
    "Are you sure you want to delete this task? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [TargetEnum.Account]:
    "Are you sure you want to delete this account? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
};

export default dialogBodyText;
