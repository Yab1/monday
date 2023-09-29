import {
  ProjectCard,
  ProjectTabs,
  ProjectEditDialog,
  NewProjectDialog,
} from "./widgets";

function ProjectManager() {
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
