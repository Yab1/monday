import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Input } from "@material-tailwind/react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { ActionEnum, TargetEnum } from "@/enum";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { groupSchema } from "../others";
import { alterRecord } from "../slice";
import { toggleConfirmationDialog } from "@/slices";

function TaskManager() {
  const selectedProject = useAppSelector((state) => state.selectedProject);
  // const { isGroupAddDialogOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      groupName: "",
    },
    validationSchema: groupSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const newGroup = {
        id: uuidv4(),
        groupName: values.groupName,
        isCollapsed: true,
        tasks: [],
      };
      const isDuplicated = selectedProject.groups.filter(
        (group) => group.groupName === values.groupName
      );

      if (isDuplicated.length === 0) {
        dispatch(
          alterRecord({
            target: TargetEnum.Group,
            id: selectedProject.id,
            actionType: ActionEnum.Add,
            payload: newGroup,
          })
        );
        formik.resetForm();
        // dispatch(toggleDialog("isCreateDialogOpen"));
      } else {
        formik.setFieldError(
          "groupName",
          "A Group with the same name already exists"
        );
      }
    },
  });

  return (
    <div className="mt-5">
      {true ? (
        <Button
          variant="gradient"
          color="blue"
          className="flex gap-2 capitalize"
        >
          <PlusIcon className="h-4 aspect-square" />
          Add new group
        </Button>
      ) : (
        <form className="flex items-center gap-4">
          <div className="w-[450px]">
            <Input crossOrigin={undefined} label="Group Name" />
          </div>
          <Button
            variant="gradient"
            color="green"
            className="flex gap-2 capitalize"
          >
            Add
          </Button>
          <Button
            variant="gradient"
            color="red"
            className="flex gap-2 capitalize"
            onClick={() => dispatch(toggleConfirmationDialog(TargetEnum.Group))}
          >
            Cancel
          </Button>
        </form>
      )}
    </div>
  );
}

TaskManager.displayName = "/src/features/projects/widgets/TaskManager.tsx";

export default TaskManager;
