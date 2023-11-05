import { FilterTargetEnum, ProjectFilterStatesEnum, TargetEnum } from "@/enum";

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
    isLoading: boolean;
    sideNav: boolean;
    addProjectDialog: boolean;
    // editProjectDialog: boolean;
    // addGroup: boolean;
  };
  confirmationDialog: IConfirmationState;
  editing: IEditingState;
  showAlert: boolean;
  filterSettings: {
    [FilterTargetEnum.PROJECTS]: ProjectFilterStatesEnum;
  };
}
