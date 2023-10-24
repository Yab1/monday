import {
  ProjectStatusEnum,
  TaskStatusEnum,
  InvitationStatusEnum,
} from "@/enum";

type color = "blue-gray" | "yellow" | "green";

const colorMap: Record<ProjectStatusEnum, color> = {
  [ProjectStatusEnum.Active]: "green",
  [ProjectStatusEnum.Closed]: "green",
  [ProjectStatusEnum.Archived]: "green",
  // [StatusEnum.Pending]: "blue-gray",
  // [StatusEnum["Ready for Review"]]: "yellow",
  // [StatusEnum["In Progress"]]: "yellow",
  // [StatusEnum.Completed]: "green",
};

export default colorMap;
