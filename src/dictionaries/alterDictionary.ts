import { ActionEnum, TargetEnum } from "@/enum";
import { Project, User } from "@/interfaces";

type ActionEnumFunction = (
  id: string,
  data: Project[] | User[],
  payload?: Object
) => void;

const alterDictionary: Record<
  TargetEnum,
  Record<ActionEnum, ActionEnumFunction>
> = {
  [TargetEnum.Project]: {
    [ActionEnum.Add]: (_, data, payload) => {
      const projects = data as Project[];
      return [...projects, payload];
    },
    [ActionEnum.Delete]: (id, data, _) => {
      const projects = data as Project[];
      return projects.filter((project) => project.id !== id);
    },
    [ActionEnum.Update]: (id, data, payload) => {
      return data.map((project) => {
        if (project.id === id) {
          return payload;
        } else {
          return project;
        }
      });
    },
  },
  [TargetEnum.Group]: {
    [ActionEnum.Add]: (id, data, payload) => {
      const projects = data as Project[];
      return projects.map((project) => {
        if (project.id === id) {
          const updatedGroups = [...project.groups, payload];
          return { ...project, groups: updatedGroups };
        } else {
          return project;
        }
      });
    },
    [ActionEnum.Delete]: (id, data, _) => {
      const projects = data as Project[];
      return projects.map((project) => {
        const updatedGroups = project.groups.filter((group) => group.id !== id);
        return { ...project, groups: updatedGroups };
      });
    },
    [ActionEnum.Update]: (id, data, payload) => {
      const projects = data as Project[];
      return projects.map((project) => {
        const updatedGroups = project.groups.map((group) => {
          if (group.id === id) {
            return payload;
          } else {
            return group;
          }
        });
        return { ...project, groups: updatedGroups };
      });
    },
  },
  [TargetEnum.Task]: {
    [ActionEnum.Add]: (id, data, payload) => {
      const projects = data as Project[];
      return projects.map((project) => {
        const updatedGroups = project.groups.map((group) => {
          if (group.id === id) {
            const updatedTasks = [...group.tasks, payload];
            return { ...group, tasks: updatedTasks };
          } else {
            return group;
          }
        });
        return { ...project, groups: updatedGroups };
      });
    },
    [ActionEnum.Delete]: (id, data, _) => {
      const projects = data as Project[];
      return projects.map((project) => {
        const updatedGroups = project.groups.map((group) => {
          const updatedTasks = group.tasks.filter((task) => task.id !== id);
          return { ...group, tasks: updatedTasks };
        });
        return { ...project, groups: updatedGroups };
      });
    },
    [ActionEnum.Update]: (id, data, payload) => {
      const projects = data as Project[];
      return projects.map((project) => {
        const updatedGroups = project.groups.map((group) => {
          const updatedTasks = group.tasks.map((task) => {
            if (task.id === id) {
              return payload;
            } else {
              return task;
            }
          });
          return { ...group, tasks: updatedTasks };
        });
        return { ...project, groups: updatedGroups };
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
