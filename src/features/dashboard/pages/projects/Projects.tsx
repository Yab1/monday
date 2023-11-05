import { Fragment } from "react";
import { ProjectGallery, NoContent } from "./layouts/projectsOverview";

function Projects() {
  return <Fragment>{false ? <ProjectGallery /> : <NoContent />}</Fragment>;
}

Projects.displayName = "/src/features/dashboard/projects/Projects.tsx";
export default Projects;
