import { ActionEnum, TargetEnum } from "@/enum";
import { Project } from "@/interfaces";

type ActionEnumFunction = (
  id: string,
  projects: Project[],
  payload?: Object
) => void;

const alterDictionary: Record<
  TargetEnum,
  Record<ActionEnum, ActionEnumFunction>
> = {
  [TargetEnum.Project]: {
    [ActionEnum.Add]: (_, projects, payload) => {
      return [...projects, payload];
    },
    [ActionEnum.Delete]: (id, projects, _) => {
      return projects.filter((project) => project.id !== id);
    },
    [ActionEnum.Update]: (id, projects, payload) => {
      return projects.map((project) => {
        if (project.id === id) {
          return payload;
        } else {
          return project;
        }
      });
    },
  },
  [TargetEnum.Group]: {
    [ActionEnum.Add]: (id, projects, payload) => {
      return projects.map((project) => {
        if (project.id === id) {
          const updatedGroups = [...project.groups, payload];
          return { ...project, groups: updatedGroups };
        } else {
          return project;
        }
      });
    },
    [ActionEnum.Delete]: (id, projects, _) => {
      return projects.map((project) => {
        const updatedGroups = project.groups.filter((group) => group.id !== id);
        return { ...project, groups: updatedGroups };
      });
    },
    [ActionEnum.Update]: (id, projects, payload) => {
      return projects.map((project) => {
        project.groups.map((group) => {
          if (group.id === id) {
            return payload;
          } else {
            return group;
          }
        });
      });
    },
  },
  [TargetEnum.Task]: {
    [ActionEnum.Add]: (id, projects, payload) => {
      return projects.map((project) => {
        project.groups.map((group) => {
          if (group.id === id) {
            const updatedTasks = [...group.tasks, payload];
            return updatedTasks;
          } else {
            return group;
          }
        });
      });
    },
    [ActionEnum.Delete]: (id, projects, _) => {
      return projects.map((project) => {
        const updatedGroups = project.groups.map((group) =>
          group.tasks.filter((task) => task.id !== id)
        );
        return { ...project, groups: updatedGroups };
      });
    },
    [ActionEnum.Update]: (id, projects, payload) => {
      return projects.map((project) => {
        project.groups.map((group) => {
          group.tasks.map((task) => {
            if (task.id === id) {
              return payload;
            } else {
              return group;
            }
          });
        });
      });
    },
  },
  [TargetEnum.Account]: {
    [ActionEnum.Add]: () => {},
    [ActionEnum.Delete]: () => {},
    [ActionEnum.Update]: () => {},
  },
};

export default alterDictionary;
