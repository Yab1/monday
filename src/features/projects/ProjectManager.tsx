import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  ProjectCard,
  ProjectTabs,
  ProjectEditDialog,
  NewProjectDialog,
} from "./widgets";
import { updateProject, selectProject } from "./slice";

function ProjectManager() {
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const projects = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (projects.length > 0) {
      dispatch(selectProject(projects[0]));
    }
  }, [projects]);

  return (
    <section className="flex flex-col gap-8">
      <ProjectCard />
      <ProjectTabs />
      <ProjectEditDialog />
      <NewProjectDialog />
    </section>
  );
}

ProjectManager.displayName = "/src/pages/projects/ProjectManager.tsx";

export default ProjectManager;
