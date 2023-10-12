import { DeleteEnum } from "@/enum";
import { removeProject, removeGroup, removeTask } from "@/features";

const dialogAction: Record<DeleteEnum, Function> = {
  [DeleteEnum.Project]: removeProject,
  [DeleteEnum.Group]: removeGroup,
  [DeleteEnum.Task]: removeTask,
  [DeleteEnum.Account]: removeTask,
};

export default dialogAction;
