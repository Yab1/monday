import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { IProjectMetaData, IBatchMetaData } from "@/interfaces";
import { ActionEnum, TargetEnum } from "@/enum";
import { app } from "@/firebase";

type ActionEnumFunction = (
  data: IProjectMetaData | IBatchMetaData,
  projectID?: string,
  batchID?: string,
  taskID?: string
) => void;

const db = getFirestore(app);

const alterDictionary: Record<
  TargetEnum,
  Record<ActionEnum, ActionEnumFunction>
> = {
  [TargetEnum.Project]: {
    [ActionEnum.Add]: async (data) => {
      const newProject = data as IProjectMetaData;
      return await addDoc(collection(db, "projects"), newProject);
    },
  },
  [TargetEnum.Batch]: {
    [ActionEnum.Add]: async (data, projectID) => {
      const parentDocRef = doc(db, "projects", projectID as string);
      const subCollectionRef = collection(parentDocRef, "subCollection");
      return await addDoc(subCollectionRef, data);
    },
  },
  // [TargetEnum.Task]: {
  //   [ActionEnum.Add]: (id, data, payload) => {
  //     const projects = data as IProject[];
  //     return projects.map((project) => {
  //       const updatedGroups = project.groups.map((group) => {
  //         if (group.id === id) {
  //           const updatedTasks = [...group.tasks, payload];
  //           return { ...group, tasks: updatedTasks };
  //         } else {
  //           return group;
  //         }
  //       });
  //       return { ...project, groups: updatedGroups };
  //     });
  //   },
  //   [ActionEnum.Delete]: (id, data, _) => {
  //     const projects = data as IProject[];
  //     return projects.map((project) => {
  //       const updatedGroups = project.groups.map((group) => {
  //         const updatedTasks = group.tasks.filter((task) => task.id !== id);
  //         return { ...group, tasks: updatedTasks };
  //       });
  //       return { ...project, groups: updatedGroups };
  //     });
  //   },
  //   [ActionEnum.Update]: (id, data, payload) => {
  //     const projects = data as IProject[];
  //     return projects.map((project) => {
  //       const updatedGroups = project.groups.map((group) => {
  //         const updatedTasks = group.tasks.map((task) => {
  //           if (task.id === id) {
  //             return payload;
  //           } else {
  //             return task;
  //           }
  //         });
  //         return { ...group, tasks: updatedTasks };
  //       });
  //       return { ...project, groups: updatedGroups };
  //     });
  //   },
  // },
  // [TargetEnum.Account]: {
  //   [ActionEnum.Add]: () => {},
  //   [ActionEnum.Delete]: () => {},
  //   [ActionEnum.Update]: () => {},
  // },
};

export default alterDictionary;
