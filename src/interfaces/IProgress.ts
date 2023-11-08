import { StatusEnum } from "@/enum";

interface IProgressState {
  status: StatusEnum;
  error: unknown;
}

export default IProgressState;
