import {
  RectangleStackIcon,
  HandThumbUpIcon,
  UserPlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

type Color =
  | "white"
  | "blue-gray"
  | "gray"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";

export interface StatisticsCardData {
  color: Color;
  icon: any;
  title: string;
  value: string;
  footer: any;
}

const StatisticsCardsData: StatisticsCardData[] = [
  {
    color: "blue",
    icon: RectangleStackIcon,
    title: "Today's Tasks",
    value: "5",
    footer: {
      color: "text-green-500",
      value: "+10%",
      label: "than yesterday",
    },
  },
  {
    color: "pink",
    icon: HandThumbUpIcon,
    title: "Completed Tasks",
    value: "2",
    footer: {
      color: "text-yellow-700",
      value: "45%",
      label: "done",
    },
  },
  {
    color: "green",
    icon: UserPlusIcon,
    title: "New Users",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "orange",
    icon: UserIcon,
    title: "Active Users",
    value: "103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default StatisticsCardsData;
