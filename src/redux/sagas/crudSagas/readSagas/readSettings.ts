import {
  DocumentReference,
  QuerySnapshot,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { call, cancel, put, take } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { db } from "@/firebase";
import { IUserSettings } from "@/interfaces";
import { firestoreFailure, setSettings } from "@/redux/slices";
import { deriveFirestoreError } from "@/function";

function createSettingsChannel(settingRef: DocumentReference) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      settingRef,
      (doc: any) => {
        emitter(doc.data());
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return unsubscribe;
  });
}

function* readSettingsSaga(userId: string) {
  const settingRef: DocumentReference = doc(
    db,
    "users",
    userId,
    "privateData",
    "settings"
  );

  const channel: EventChannel<QuerySnapshot<IUserSettings> | FirebaseError> =
    yield call(createSettingsChannel, settingRef);

  try {
    while (true) {
      const data: IUserSettings | FirebaseError = yield take(channel);

      if (data instanceof FirebaseError) {
        yield put(firestoreFailure(data.code));
      } else {
        yield put(setSettings(data));
      }

      yield cancel();
    }
  } catch (error) {
    if (error instanceof FirebaseError) {
      const errorMessage: string = yield call(deriveFirestoreError, error.code);
      yield put(firestoreFailure(errorMessage));
    }
  } finally {
    if (channel) channel.close();
  }
}

export default readSettingsSaga;
