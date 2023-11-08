import { SagaActions } from "@/enum";
import { db } from "@/firebase";
import { IPrivateData, IUserSettings } from "@/interfaces";
import {
  CollectionReference,
  QuerySnapshot,
  collection,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { call, fork, put, take, takeLatest } from "redux-saga/effects";
import { EventChannel, eventChannel } from "redux-saga";
import { FirebaseError } from "firebase/app";
import {
  progressStart,
  progressSuccess,
  progressFailure,
  setPrivateData,
  authenticate,
} from "@/redux/slices";

function createPrivateDataChannel(privateDataRef: CollectionReference) {
  return eventChannel((emitter) => {
    const unsubscribe = onSnapshot(
      privateDataRef,
      (snapshot: QuerySnapshot) => {
        let privateData: IPrivateData = {} as IPrivateData;
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
        emitter(privateData);
      },
      (error) => {
        emitter(new FirebaseError(error.code, error.message));
      }
    );
    return () => unsubscribe();
  });
}

function* readPrivateData(userId: string) {
  yield put(progressStart());

  const userRef = doc(db, "users", userId);
  const privateDataRef: CollectionReference = collection(
    userRef,
    "privateData"
  );

  const channel: EventChannel<QuerySnapshot<IPrivateData> | FirebaseError> =
    yield call(createPrivateDataChannel, privateDataRef);

  try {
    while (true) {
      const data: IPrivateData | FirebaseError = yield take(channel);

      if (data instanceof FirebaseError) {
        yield put(progressFailure(data.code));
      } else {
        yield put(setPrivateData(data));
        yield put(progressSuccess());
        yield put(authenticate(true));
      }
    }
  } finally {
    channel.close();
  }
}

export default readPrivateData;

// function* watchReadPrivateData() {
//   yield takeLatest(SagaActions.READ_PVT, readPrivateData);
// }

// const readPrivateDataSaga = [fork(watchReadPrivateData)];

// export default readPrivateDataSaga;
