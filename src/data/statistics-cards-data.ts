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

interface Footer {
  color: string;
  label: string;
  value: string;
}
export interface StatisticsCardData {
  color: Color;
  title: string;
  value: string;
  footer: Footer;
}

const StatisticsCardsData: StatisticsCardData[] = [
  {
    color: "blue",
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
