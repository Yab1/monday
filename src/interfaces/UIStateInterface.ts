import { TargetEnum } from "@/enum";
export interface ConfirmationState {
  type: TargetEnum;
  open: boolean;
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
}
