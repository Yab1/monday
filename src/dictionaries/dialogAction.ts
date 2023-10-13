import { TargetEnum } from "@/enum";
import { removeProject, removeGroup, removeTask } from "@/features";

const dialogAction: Record<TargetEnum, Function> = {
  [TargetEnum.Project]: removeProject,
  [TargetEnum.Group]: removeGroup,
  [TargetEnum.Task]: removeTask,
  [TargetEnum.Account]: removeTask,
};

export default dialogAction;
