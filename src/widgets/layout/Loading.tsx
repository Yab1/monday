import { Fragment } from "react";
import { useAppSelector } from "@/hooks";

function Loading() {
  const {
    toggleable: { isLoading },
  } = useAppSelector((state) => state.ui);

  return (
    <Fragment>
      <div className="fixed inset-0 z-50 grid w-screen h-screen bg-black bg-opacity-50 place-items-center backdrop-blur-sm">
        <div className="wrapper">
          <div className="box-wrap">
            <div className="box one"></div>
            <div className="box two"></div>
            <div className="box three"></div>
            <div className="box four"></div>
            <div className="box five"></div>
            <div className="box six"></div>
          </div>
        </div>
      </div>
      {/* {isLoading ? (
      ) : null} */}
    </Fragment>
  );
}

Loading.displayName = "/src/widgets/layout/Loading.tsx";

export default Loading;
