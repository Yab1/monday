import { Fragment, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useAppSelector, useAppDispatch } from "@/hooks";
import Inventory from "./inventory/Inventory";
import { selectProject } from "./slice";
import { toggler } from "@/slices";
import { ToggleableEnum } from "@/enum";
import NewProjectDialog from "./inventory/selector/NewProjectDialog";

function ProjectManager() {
  const projects = useAppSelector((state) => state.projects);
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!Boolean(selectedProject.id)) {
      dispatch(selectProject(projects[0]));
    } else {
      const currentProject = projects.filter(
        (project) => project.id === selectedProject.id
      );
      dispatch(selectProject(currentProject[0]));
    }
  }, [projects]);

  return (
    <Fragment>
      {Boolean(selectedProject.id) ? (
        <Inventory />
      ) : (
        <div
          className="flex flex-col items-center justify-center h-[500px] gap-2"
          onDoubleClick={() =>
            dispatch(toggler(ToggleableEnum.AddProjectDialog))
          }
        >
          <Typography variant="h3" className="text-gray-400 cursor-default">
            No Active Project
          </Typography>
          <Button
            variant="text"
            color="blue"
            className="flex gap-2 text-gray-400 normal-case"
            onClick={() => dispatch(toggler(ToggleableEnum.AddProjectDialog))}
          >
            <PlusIcon className="h-4 aspect-square" />
            Add Project
          </Button>
          <NewProjectDialog />
        </div>
      )}
    </Fragment>
  );
}

ProjectManager.displayName = "/src/features/projects/ProjectManager.tsx";

export default ProjectManager;
