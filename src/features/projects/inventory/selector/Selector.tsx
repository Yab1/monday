import { Fragment } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Button,
  Typography,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { selectProject } from "@/features/projects/slice";
import { toggler } from "@/slices";
import { ToggleableEnum } from "@/enum";
import NewProjectDialog from "./NewProjectDialog";

function Selector() {
  const projects = useAppSelector((state) => state.projects);
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <Tabs value={selectedProject.label} id={selectedProject.label}>
        <TabsHeader
          className="p-0 bg-transparent border-b rounded-none border-blue-gray-50"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {projects.map((project) => (
            <Tab
              key={project.id}
              value={project.label}
              onClick={() => dispatch(selectProject(project))}
              className={`w-fit px-3 pt-1 pb-4 border-r ${
                selectedProject.id === project.id
                  ? "text-gray-900"
                  : "text-gray-900"
              }`}
            >
              <Typography
                variant="small"
                className="text-sm font-light pointer-events-none"
              >
                {project.label === selectedProject.label
                  ? selectedProject.label
                  : project.label}
              </Typography>
            </Tab>
          ))}
          <Button
            className="px-3 py-1"
            variant="text"
            onClick={() => dispatch(toggler(ToggleableEnum.AddProjectDialog))}
          >
            <PlusIcon className="h-5 aspect-square" />
          </Button>
        </TabsHeader>
      </Tabs>
      <NewProjectDialog />
    </Fragment>
  );
}

Selector.displayName = "/src/features/projects/inventory/selector/Selector.tsx";

export default Selector;
