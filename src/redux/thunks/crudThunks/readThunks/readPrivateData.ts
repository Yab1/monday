import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { db } from "@/firebase";
import { IPrivateData, IUserSettings } from "@/interfaces";

const readPrivateData = createAsyncThunk<IPrivateData, string>(
  "read-access-control",
  async (userID) => {
    try {
      const userRef = doc(db, "users", userID);
      const privateDataRef = collection(userRef, "privateData");

      let privateData: IPrivateData = {} as IPrivateData;

      const fetchPrivateData = new Promise((resolve, _) => {
        onSnapshot(privateDataRef, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.doc.id === "settings") {
              privateData = {
                ...privateData,
                settings: { ...(change.doc.data() as IUserSettings) },
              };
            } else {
              privateData = {
                ...privateData,
                projectIds: change.doc.data().projectIds,
              };
            }
          });
          resolve("Private Data fetch successfully");
        });
      });

      await Promise.all([fetchPrivateData]);

      return privateData;
    } catch (error) {
      throw error;
    }
  }
);

export default readPrivateData;
