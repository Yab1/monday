import { chartsConfig } from "@/configs";
import {
  WeeklyProgressChart,
  DailyProgressChart,
  StatisticsChartsData,
} from "@/interfaces";

const weeklyProgressChart: WeeklyProgressChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Views",
      data: [50, 20, 10, 22, 50, 10, 40],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#fff",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const dailyProgressChart: DailyProgressChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  },
};

const statisticsChartsData: StatisticsChartsData[] = [
  {
    color: "blue",
    title: "Weekly Progress",
    description: "Last Campaign Performance",
    footer: "campaign sent 2 days ago",
    chart: weeklyProgressChart,
  },
  {
    color: "pink",
    title: "Monthly Progress",
    description: "15% increase in today sales",
    footer: "updated 4 min ago",
    chart: dailyProgressChart,
  },
];

export default statisticsChartsData;
