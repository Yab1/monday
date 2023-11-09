import { StatusEnum } from "@/enum";

interface IFirestoreState {
  firestoreStatus: StatusEnum;
  firestoreError: unknown;
}

export default IFirestoreState;
