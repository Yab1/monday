import { createAsyncThunk } from "@reduxjs/toolkit";
// import {
//   collection,
//   doc,
//   getDocs,
//   getDocsFromCache,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
// import { db } from "@/firebase";
// import {
//   IAccessControl,
//   IAccessControlState,
//   IProject,
//   IProjectMetaData,
// } from "@/interfaces";

const readProject = createAsyncThunk<unknown, string>(
  "read-project",
  async (userID) => {
    try {
      const fetch = new Promise((resolve, _) => {
        setTimeout(() => resolve(userID), 5000);
      });

      const res = await Promise.all([fetch]);
      return res;
    } catch (error) {
      alert(error);
    }
  }
);

export default readProject;

// const res = await fetch;
