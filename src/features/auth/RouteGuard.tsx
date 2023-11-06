import { ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetState, showAlert } from "@/redux/slices";
import { auth, db } from "@/firebase";
import {
  createUser,
  readPrivateData,
  readUser,
} from "@/redux/thunks/crudThunks";
import { Loading } from "@/widgets";
import { doc, getDoc } from "firebase/firestore";

function RouteGuard({ children }: { children: ReactNode }) {
  const { error, status } = useAppSelector((state) => state.auth);
  const [firebase, setFirebase] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async (user: User | null) => {
      setFirebase(true);
      if (user !== null) {
        const userRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userRef);

        if (userDocSnapshot.exists()) {
          dispatch(readUser(user.uid));
          dispatch(readPrivateData(user.uid));
        } else {
          dispatch(createUser({ user }));
        }
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

  return !firebase || status === "loading" ? <Loading /> : children;
}

RouteGuard.displayName = "/src/features/auth/RouteGuard.tsx";

export default RouteGuard;
