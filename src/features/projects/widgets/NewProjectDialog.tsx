import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleDialog } from "@/common";

function NewProjectDialog() {
  const { isCreateDialogOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={isCreateDialogOpen}
      handler={() => dispatch(toggleDialog("isCreateDialogOpen"))}
    >
      <div className="flex items-center justify-between">
        <DialogHeader>New Project</DialogHeader>
      </div>
      <DialogBody divider>
        <div className="grid gap-6">
          <Input label="Project Title" crossOrigin={undefined} />
          <Textarea label="Project Description" />
        </div>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button
          variant="outlined"
          color="red"
          onClick={() => dispatch(toggleDialog("isCreateDialogOpen"))}
        >
          Cancel
        </Button>
        <Button
          variant="gradient"
          color="green"
          onClick={() => dispatch(toggleDialog("isCreateDialogOpen"))}
        >
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

NewProjectDialog.displayName =
  "src/features/projects/widgets/NewProjectDialog.tsx";

export default NewProjectDialog;
