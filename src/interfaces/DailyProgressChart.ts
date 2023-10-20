type type =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap";

interface DailyProgressChart {
  type: type;
  height: number;
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    colors: string[];
    stroke: {
      lineCap: string;
    };
    markers: {
      size: number;
    };
    xaxis: {
      categories: string[];
    };
  };
}

interface WeeklyProgressChart {
  type: type;
  height: number;
  series: {
    name: string;
    data: number[];
  }[];
  options: {
    colors: string;
    plotOptions: {
      bar: {
        columnWidth: string;
        borderRadius: number;
      };
    };
    xaxis: {
      categories: string[];
    };
  };
}

type color =
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

interface StatisticsChartsData {
  color: color;
  title: string;
  description: string;
  footer: any;
  chart: WeeklyProgressChart | DailyProgressChart;
}

export type { DailyProgressChart, WeeklyProgressChart, StatisticsChartsData };
