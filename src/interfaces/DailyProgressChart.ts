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

export interface DailyProgressChart {
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

export interface WeeklyProgressChart {
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

export interface StatisticsChartsData {
  color: color;
  title: string;
  description: string;
  footer: any;
  chart: WeeklyProgressChart | DailyProgressChart;
}
