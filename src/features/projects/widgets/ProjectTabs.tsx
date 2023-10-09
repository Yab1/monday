import { Fragment, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Typography,
} from "@material-tailwind/react";
import ProjectTable from "./ProjectTable";
import { TaskManager } from "@/features/projects/atoms";
import { useSelector, useDispatch } from "react-redux";
import { selectProject, updateProject } from "../slice";
import { RootState } from "@/redux";
import { PlusIcon } from "@heroicons/react/24/outline";
import { toggleDialog } from "@/common";

function ProjectEditDialog() {
  const selectedProject = useSelector(
    (state: RootState) => state.selectedProject
  );
  const projects = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Tabs value={projects[0].label} id={selectedProject.label}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {projects.map((project) => (
            <Tab
              key={project.id}
              value={project.label}
              onClick={() => {
                dispatch(selectProject(project));
              }}
              className={`w-fit px-3 pt-1 pb-4 border-r ${
                selectedProject.id === project.id
                  ? "text-gray-900"
                  : "text-gray-900"
              }`}
            >
              <Typography variant="small" className="font-light text-sm">
                {project.label}
              </Typography>
            </Tab>
          ))}
          <Button
            className="px-3 py-1"
            variant="text"
            onClick={() => dispatch(toggleDialog("isCreateDialogOpen"))}
          >
            <PlusIcon className="h-5 aspect-square" />
          </Button>
        </TabsHeader>

        <TaskManager />

        <TabsBody className="pt-10 flex flex-col">
          {projects.map(({ label }) => (
            <TabPanel key={label} value={label} className="p-0">
              <ProjectTable />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Fragment>
  );
}

ProjectEditDialog.displayName =
  "/src/features/projects/widgets/ProjectEditDialog.tsx";

export default ProjectEditDialog;
