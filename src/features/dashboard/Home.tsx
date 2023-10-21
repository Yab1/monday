import { Typography } from "@material-tailwind/react";
import { StatisticsChart, ProjectOverviewTable } from "@/widgets";
import { statisticsChartsData } from "@/data";
import { ClockIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <div className="mt-12 grid grid-cols-12">
      <div className="mb-6 col-span-full grid grid-cols-2 gap-x-8">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                &nbsp;{props.footer as string}
              </Typography>
            }
          />
        ))}
      </div>

      <div className="mb-4 col-span-full">
        <ProjectOverviewTable />
      </div>
    </div>
  );
}

Home.displayName = "/src/pages/notifications/home.tsx";

export default Home;
