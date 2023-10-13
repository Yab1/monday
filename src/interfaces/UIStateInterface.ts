import { TargetEnum } from "@/enum";
export interface ConfirmationState {
  type: TargetEnum;
  open: boolean;
}
export interface UIStates {
  darkMode: boolean;
  isEditDialogOpen: boolean;
  isCreateDialogOpen: boolean;
  confirmationDialog: ConfirmationState;
}
