import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  authenticate,
  progressStart,
  progressSuccess,
  resetProgressState,
  showAlert,
} from "@/redux/slices";
import { auth } from "@/firebase";
import { Loading } from "@/widgets";
import { SagaActions, StatusEnum } from "@/enum";
import { isObjectEmpty } from "@/function";

function RouteGuard({ children }: { children: ReactNode }) {
  const [firebase, setFirebase] = useState(false);
  const { error, status } = useAppSelector((state) => state.progress);
  const { user, privateData } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // if (status === StatusEnum.LOADING || status === StatusEnum.IDLE) {
  //   // console.log(status);
  // }
  // console.log(status);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setFirebase(true);
      dispatch(progressStart());

      if (user !== null) {
        dispatch({ type: SagaActions.INITIALIZE_USER, payload: user });
      } else {
        dispatch(progressSuccess());
      }
    });

    return () => unsubscribe();
  }, [dispatch, auth]);

  useEffect(() => {
    if (!isObjectEmpty(user) && !isObjectEmpty(privateData)) {
      dispatch(authenticate(true));
      dispatch(progressSuccess());
    }
  }, [user, privateData]);

  useEffect(() => {
    if (error) {
      dispatch(showAlert(true));

      setTimeout(() => {
        dispatch(showAlert(false));
        dispatch(resetProgressState());
      }, 4000);
    }
  }, [error]);

  return !firebase || status === StatusEnum.LOADING ? <Loading /> : children;
}

RouteGuard.displayName = "/src/features/auth/RouteGuard.tsx";

export default RouteGuard;
