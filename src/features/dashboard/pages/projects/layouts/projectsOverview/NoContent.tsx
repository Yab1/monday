import { Button, Typography } from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { NewProjectDialog } from "./index";
import { ToggleableEnum } from "@/enum";
import { useAppDispatch } from "@/hooks";
import { toggler } from "@/redux/slices";

function NoContent() {
  const dispatch = useAppDispatch();

  return (
    <div
      className="flex flex-col items-center justify-center h-[500px] gap-2"
      onDoubleClick={() => dispatch(toggler(ToggleableEnum.ADD_PROJECT_DIALOG))}
    >
      <Typography variant="h3" className="text-gray-400 cursor-default">
        No Active Project
      </Typography>
      <Button
        variant="text"
        color="blue"
        className="flex gap-2 text-gray-400 normal-case"
        onClick={() => dispatch(toggler(ToggleableEnum.ADD_PROJECT_DIALOG))}
      >
        <AiOutlinePlus />
        Add Project
      </Button>
      <NewProjectDialog />
    </div>
  );
}

NoContent.displayName =
  "/src/features/dashboard/projects/widgets/NoContent.tsx";
export default NoContent;
