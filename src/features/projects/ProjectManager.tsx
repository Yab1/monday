import { Fragment, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/hooks";
import Inventory from "./inventory/Inventory";
import { selectProject } from "./slice";

function ProjectManager() {
  const projects = useAppSelector((state) => state.projects);
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (Boolean(selectedProject.id)) {
      const currentProject = projects.filter(
        (project) => project.id === selectedProject.id
      );
      dispatch(selectProject(currentProject[0]));
    } else if (projects.length > 0) {
      dispatch(selectProject(projects[0]));
    }
  }, [projects]);

  return (
    <Fragment>{Boolean(selectedProject.id) ? <Inventory /> : null}</Fragment>
  );
}

ProjectManager.displayName = "/src/features/projects/ProjectManager.tsx";

export default ProjectManager;
