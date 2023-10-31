import { IProject, IProjectMetaData } from "@/interfaces";

function createNewProject(projectMetaData: IProjectMetaData): IProject {
  const newProject: IProject = {
    ...projectMetaData,
    groups: [],
  };
  return newProject;
}

export default createNewProject;
