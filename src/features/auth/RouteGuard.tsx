import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetState, showAlert } from "@/redux/slices";
import { auth } from "@/firebase";
import { Loading } from "@/widgets";
import { SagaActions } from "@/enum";

function RouteGuard({ children }: { children: ReactNode }) {
  const [firebase, setFirebase] = useState(false);
  const { error, status } = useAppSelector((state) => state.progress);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async (user: User | null) => {
      setFirebase(true);
      if (user !== null) {
        dispatch({ type: SagaActions.INITIALIZE_USER, payload: user });
      }
    };

    onAuthStateChanged(auth, (user: User | null) => {
      fetchData(user);
    });
  }, [dispatch, auth]);

  useEffect(() => {
    if (error) {
      dispatch(showAlert(true));

      setTimeout(() => {
        dispatch(showAlert(false));
        dispatch(resetState());
      }, 4000);
    }
  }, [error]);

  return !firebase || status === "Loading" ? <Loading /> : children;
}

RouteGuard.displayName = "/src/features/auth/RouteGuard.tsx";

export default RouteGuard;
