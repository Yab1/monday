interface DailyProgressChart {
  type: string;
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
  type: string;
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

interface StatisticsChartsData {
  color: string;
  title: string;
  description: string;
  footer: any;
  chart: WeeklyProgressChart | DailyProgressChart;
}

export type { DailyProgressChart, WeeklyProgressChart, StatisticsChartsData };
