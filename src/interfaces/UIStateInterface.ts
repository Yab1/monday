import { DeleteEnum } from "@/enum";
export interface ConfirmationState {
  type: DeleteEnum;
  open: boolean;
}
export interface UIStates {
  darkMode: boolean;
  isEditDialogOpen: boolean;
  isCreateDialogOpen: boolean;
  confirmationDialog: ConfirmationState;
}
