import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  authIdle,
  authStart,
  authSucceeded,
  firestoreSucceeded,
} from "@/redux/slices";
import { auth } from "@/firebase";
import { SplashScreen } from "@/widgets";
import { BufferEnum, SagaActions, StatusEnum } from "@/enum";
import { isObjectEmpty } from "@/function";

function RouteGuard({ children }: { children: ReactNode }) {
  const [firebase, setFirebase] = useState(false);
  const { authStatus, authenticated } = useAppSelector((state) => state.auth);
  const { user, settings } = useAppSelector((state) => state.firestore);
  const { [BufferEnum.PROJECT_BUFFER]: projectBuffer } = useAppSelector(
    (state) => state.buffer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setFirebase(true);
      dispatch(authStart());

      if (user !== null) {
        dispatch({ type: SagaActions.INITIALIZE_USER, payload: user });
      } else {
        dispatch(authIdle());
      }
    });

    return unsubscribe;
  }, [dispatch, auth]);

  useEffect(() => {
    if (!isObjectEmpty(user) && !isObjectEmpty(settings)) {
      dispatch(authSucceeded());
    }
  }, [user, settings, dispatch]);

  useEffect(() => {
    if (authenticated) {
      if (projectBuffer.added.length > 0) {
        dispatch({
          type: SagaActions.INITIALIZE_PROJECT,
          payload: projectBuffer.added,
        });
      } else {
        dispatch(firestoreSucceeded());
      }
    }
  }, [authenticated, dispatch, projectBuffer.added]);

  return !firebase || authStatus === StatusEnum.LOADING ? (
    <SplashScreen />
  ) : (
    children
  );
}

RouteGuard.displayName = "/src/features/auth/RouteGuard.tsx";

export default RouteGuard;
