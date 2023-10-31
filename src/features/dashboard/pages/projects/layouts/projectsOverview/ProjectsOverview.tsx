import { Fragment } from "react";
import {
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { FilterTargetEnum, ProjectFilterStatesEnum } from "@/enum";
import { ProjectTabIcons } from "@/constants";
import { applyFilter } from "@/redux/slices";

function ProjectsOverview() {
  const { filterSettings } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <Card className="h-full mx-0 mt-5 mb-6">
      <CardBody className="flex items-center justify-between p-4">
        <Typography variant="h5" color="blue-gray" className="">
          Projects Overview
        </Typography>
        <div>
          <Tabs value={filterSettings.Projects}>
            <TabsHeader className="w-96">
              {Object.entries(ProjectFilterStatesEnum).map(([key, value]) => {
                const IconComponent =
                  ProjectTabIcons[value as ProjectFilterStatesEnum];

                return (
                  <Tab
                    key={key}
                    value={value}
                    className="flex w-full text-base font-medium"
                    onClick={() =>
                      dispatch(
                        applyFilter({
                          target: FilterTargetEnum.PROJECTS,
                          value:
                            ProjectFilterStatesEnum[
                              key as ProjectFilterStatesEnum
                            ],
                        })
                      )
                    }
                  >
                    <span className="flex items-center justify-between gap-3 normal-case">
                      <IconComponent />
                      <Typography className="">
                        {key.charAt(0).toUpperCase() +
                          key.slice(1).toLowerCase()}
                      </Typography>
                    </span>
                  </Tab>
                );
              })}
            </TabsHeader>
          </Tabs>
        </div>
      </CardBody>
    </Card>
  );
}

ProjectsOverview.displayName =
  "/src/features/dashboard/projects/widgets/ProjectsOverview.tsx";
export default ProjectsOverview;
