import { Fragment } from "react";
import {
  ProjectsOverview,
  ProjectGallery,
  NoContent,
} from "./layouts/projectsOverview";

function Projects() {
  return (
    <Fragment>
      <ProjectsOverview />
      {false ? <ProjectGallery /> : <NoContent />}
    </Fragment>
  );
}

Projects.displayName = "/src/features/dashboard/projects/Projects.tsx";
export default Projects;
