// import { Typography } from "@material-tailwind/react";
// import { StatisticsChart, ProjectOverviewTable } from "@/widgets";
import { ProjectOverviewTable } from "./widgets/table";
// import { statisticsChartsData } from "@/data";
// import { ClockIcon } from "@heroicons/react/24/solid";

function Home() {
  return (
    <div className="grid grid-cols-12 mt-12">
      {/* <div className="grid grid-cols-2 mb-6 col-span-full gap-x-8">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="w-4 h-4 text-inherit" />
                &nbsp;{props.footer as string}
              </Typography>
            }
          />
        ))}
      </div> */}

      <div className="mb-4 col-span-full">
        <ProjectOverviewTable />
      </div>
    </div>
  );
}

Home.displayName = "/src/features/dashboard/pages/home/Home.tsx";

export default Home;
