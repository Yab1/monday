import { TargetEnum } from "@/enum";

export interface IConfirmationState {
  id: string;
  type: TargetEnum;
  open: boolean;
}
export interface IEditingState {
  id: string;
  isEditing: boolean;
}
export interface IUIStates {
  toggleable: {
    darkMode: boolean;
    sideNav: boolean;
    editProjectDialog: boolean;
    addProjectDialog: boolean;
    addGroup: boolean;
  };
  confirmationDialog: IConfirmationState;
  editing: IEditingState;
}
