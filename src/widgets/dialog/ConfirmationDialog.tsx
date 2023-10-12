import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toggleConfirmationDialog } from "@/common";
import { DeleteEnum } from "@/enum";
import { dialogHeaderText, dialogBodyText } from "@/dictionaries";

function ConfirmationDialog() {
  const {
    confirmationDialog: { type, open },
  } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <Dialog open={open} size="sm" handler={() => console.log("click")}>
      <DialogHeader>{dialogHeaderText[type]}</DialogHeader>
      <DialogBody divider>{dialogBodyText[type]}</DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => dispatch(toggleConfirmationDialog(DeleteEnum.Project))}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button
          variant="gradient"
          color="green"
          // onClick={}
        >
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

ConfirmationDialog.displayName = "/src/widgets/dialog/ConfirmationDialog.jsx";

export default ConfirmationDialog;
