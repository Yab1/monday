import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { authIdle, authStart, authSucceeded } from "@/redux/slices";
import { auth } from "@/firebase";
import { SplashScreen } from "@/widgets";
import { SagaActions, StatusEnum } from "@/enum";
import { isObjectEmpty } from "@/function";

function RouteGuard({ children }: { children: ReactNode }) {
  const [firebase, setFirebase] = useState(false);
  const { authStatus, user, privateData } = useAppSelector(
    (state) => state.auth
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

    return () => unsubscribe();
  }, [dispatch, auth]);

  useEffect(() => {
    if (!isObjectEmpty(user) && !isObjectEmpty(privateData)) {
      dispatch(authSucceeded());
    }
  }, [user, privateData]);

  return !firebase || authStatus === StatusEnum.LOADING ? (
    <SplashScreen />
  ) : (
    children
  );
}

RouteGuard.displayName = "/src/features/auth/RouteGuard.tsx";

export default RouteGuard;
