import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { ActionEnum, TargetEnum } from "@/enum";
import { dialogHeaderText, dialogBodyText } from "@/dictionaries";
import { toggleConfirmationDialog } from "@/slices";
import { alterRecord, selectProject } from "@/features/projects/slice";
import { Project } from "@/interfaces";

function ConfirmationDialog() {
  const projects = useAppSelector((state) => state.projects);
  const {
    confirmationDialog: { id, type, open },
  } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    const id = "";
    dispatch(toggleConfirmationDialog({ id, type }));
  };

  const handleConfirmation = () => {
    dispatch(
      alterRecord({
        id: id,
        data: projects,
        target: TargetEnum[type],
        actionType: ActionEnum.Delete,
      })
    );

    if (TargetEnum[type] === TargetEnum.Project) {
      dispatch(selectProject({} as Project));
    }

    handleCancel();
  };

  return (
    <Dialog open={open} size="sm" handler={() => console.log("click")}>
      <DialogHeader>{dialogHeaderText[type]}</DialogHeader>
      <DialogBody divider>{dialogBodyText[type]}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleCancel}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleConfirmation}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

ConfirmationDialog.displayName = "/src/widgets/dialog/ConfirmationDialog.jsx";

export default ConfirmationDialog;
