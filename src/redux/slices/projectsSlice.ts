import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { alterDictionary } from "@/dictionaries";
import { ActionEnum, TargetEnum, UserRoleEnum } from "@/enum";
import {
  IProjectState,
  IProjectMetaData,
  IBatchMetaData,
  IAccessControl,
} from "@/interfaces";
import {
  onSnapshot,
  query,
  where,
  collection,
  getFirestore,
} from "firebase/firestore";
import { app } from "@/firebase";
import { createUser } from "../thunks/crudThunks";

const db = getFirestore(app);

export const alterCollection = createAsyncThunk(
  "project/alter-collection",
  async ({
    target,
    actionType,
    data,
    projectID,
    batchID,
    taskID,
  }: {
    target: TargetEnum;
    actionType: ActionEnum;
    data?: IProjectMetaData | IBatchMetaData;
    projectID?: string;
    batchID?: string;
    taskID?: string;
  }) => {
    try {
      const docRef = alterDictionary[target][actionType](
        data,
        projectID,
        batchID,
        taskID
      );
      return docRef;
    } catch (error) {
      console.error("Error checking and creating user data: ", error);
      throw error;
    }
  }
);

export const listenForAccessControlChanges = createAsyncThunk(
  "projects/listenForAccessControlChanges",
  async (userId: string, { dispatch }) => {
    try {
      const q = query(
        collection(db, "accessControl"),
        where("user", "==", userId)
      );

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const ownedProjects: IProjectMetaData[] = [];
        const collaboratingProjects: IProjectMetaData[] = [];
        querySnapshot.forEach((doc) => {
          const accessControl: IAccessControl = doc.data() as IAccessControl;
          if (accessControl.role === UserRoleEnum.Owner) {
            const project = dispatch(
              alterCollection({
                target: TargetEnum.Project,
                actionType: ActionEnum.READ,
                projectID: accessControl.project,
              })
            );
            console.log(project);
            ownedProjects.push();
          } else {
            collaboratingProjects.push();
          }
        });
        // return accessControl;
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error("Error checking and creating user data: ", error);
      throw error;
    }
  }
);

export const projectSlice = createSlice({
  name: "project-manager",
  initialState: {} as IProjectState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        console.log(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";
        console.log(action.error.code);
      });
  },
});

export default projectSlice.reducer;
