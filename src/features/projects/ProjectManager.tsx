import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  ProjectCard,
  ProjectTabs,
  ProjectEditDialog,
  NewProjectDialog,
} from "./widgets";
import { updateProject } from "./slice";

function ProjectManager() {
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateProject(selectedProject));
  }, [selectedProject]);

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
