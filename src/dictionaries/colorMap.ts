import { StatusEnum } from "@/enum";

type color = "blue-gray" | "yellow" | "green";

const colorMap: Record<StatusEnum, color> = {
  [StatusEnum.Pending]: "blue-gray",
  [StatusEnum["Ready for Review"]]: "yellow",
  [StatusEnum["In Progress"]]: "yellow",
  [StatusEnum.Completed]: "green",
};

export default colorMap;
