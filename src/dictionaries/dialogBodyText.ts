import { DeleteType } from "@/enum";

const dialogBodyText: Record<DeleteType, string> = {
  [DeleteType.Project]:
    "Are you sure you want to delete this project? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [DeleteType.Group]:
    "Are you sure you want to delete this group? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [DeleteType.Task]:
    "Are you sure you want to delete this task? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
  [DeleteType.Account]:
    "Are you sure you want to delete this account? This action cannot be undone, and all associated data will be permanently removed. Please confirm your decision.",
};

export default dialogBodyText;
