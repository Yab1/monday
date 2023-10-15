import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  ProjectCard,
  ProjectTabs,
  ProjectEditDialog,
  NewProjectDialog,
} from "./widgets";
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
    <section className="flex flex-col gap-8">
      {Boolean(selectedProject.id) ? (
        <Fragment>
          <ProjectCard />
          <ProjectTabs />
          <ProjectEditDialog />
          <NewProjectDialog />
        </Fragment>
      ) : (
        <h1>You Don't have any Project</h1>
      )}
    </section>
  );
}

ProjectManager.displayName = "/src/pages/projects/ProjectManager.tsx";

export default ProjectManager;
