interface ChartsConfig {
  chart: {
    toolbar: {
      show: boolean;
    };
  };
  title: {
    show: string;
  };
  dataLabels: {
    enabled: boolean;
  };
  xaxis: {
    axisTicks: {
      show: boolean;
    };
    axisBorder: {
      show: false;
    };
    labels: {
      style: {
        colors: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: number;
      };
    };
  };
  yaxis: {
    labels: {
      style: {
        colors: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: number;
      };
    };
  };
  grid: {
    show: boolean;
    borderColor: string;
    strokeDashArray: number;
    xaxis: {
      lines: {
        show: boolean;
      };
    };
    padding: {
      top: number;
      right: number;
    };
  };
  fill: {
    opacity: number;
  };
  tooltip: {
    theme: string;
  };
}

export default ChartsConfig;
