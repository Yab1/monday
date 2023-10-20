import { TargetEnum } from "@/enum";
export interface ConfirmationState {
  id: string;
  type: TargetEnum;
  open: boolean;
}
export interface EditingState {
  id: string;
  isEditing: boolean;
}
export interface UIStates {
  toggleable: {
    darkMode: boolean;
    sideNav: boolean;
    editProjectDialog: boolean;
    addProjectDialog: boolean;
    addGroup: boolean;
  };
  confirmationDialog: ConfirmationState;
  editing: EditingState;
}
