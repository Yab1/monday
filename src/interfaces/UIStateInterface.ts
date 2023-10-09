import { DeleteType } from "@/enum";
export interface ConfirmationState {
  type: DeleteType;
  open: boolean;
}
export interface UIStates {
  darkMode: boolean;
  isEditDialogOpen: boolean;
  isCreateDialogOpen: boolean;
  confirmationDialog: ConfirmationState;
}
