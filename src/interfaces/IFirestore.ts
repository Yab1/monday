import { StatusEnum } from "@/enum";
import { IInvitation, IProject, IUser, IUserSettings } from ".";

interface IFirestoreState {
  firestoreStatus: StatusEnum;
  firestoreError: unknown;
  user: IUser;
  settings: IUserSettings;
  projects: IProject[];
  invitations: IInvitation[];
  messages: null;
}

export default IFirestoreState;
