import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { ActionEnum, TargetEnum, ToggleableEnum } from "@/enum";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { groupSchema } from "@/features/projects/schema";
import { alterRecord } from "@/features/projects/slice";
import { toggler } from "@/slices";
import { getCurrentDate } from "@/function";

function AddGroup() {
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const projects = useAppSelector((state) => state.projects);

  const {
    toggleable: { addGroup },
  } = useAppSelector((state) => state.ui);
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
        isCollapsed: false,
        timestamp: getCurrentDate(),
        creator: "1",
        tasks: [],
      };
      const isDuplicated = selectedProject.groups.filter(
        (group) => group.groupName === values.groupName
      );

      if (isDuplicated.length === 0) {
        dispatch(
          alterRecord({
            id: selectedProject.id,
            payload: newGroup,
            data: projects,
            target: TargetEnum.Group,
            actionType: ActionEnum.Add,
          })
        );
        formik.resetForm();
        dispatch(toggler(ToggleableEnum.AddGroup));
      } else {
        formik.setFieldError(
          "groupName",
          "A Group with the same name already exists"
        );
      }
    },
  });

  return (
    <div className="mt-1">
      {addGroup ? (
        <form
          onSubmit={formik.handleSubmit}
          className="flex items-center gap-4"
        >
          <div className="relative w-[450px]">
            <Input
              crossOrigin={undefined}
              id="groupName"
              label="Group Name"
              value={formik.values.groupName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={Boolean(formik.errors.groupName)}
            />
            {formik.errors.groupName && (
              <Typography
                variant="small"
                color="red"
                className="ml-3 text-xs absolute top-10"
              >
                {formik.errors.groupName}
              </Typography>
            )}
          </div>
          <Button
            variant="gradient"
            color="green"
            className="flex gap-2 capitalize"
            type="submit"
            onClick={() => formik.handleSubmit()}
          >
            Add
          </Button>
          <Button
            variant="gradient"
            color="red"
            className="flex gap-2 capitalize"
            onClick={() => dispatch(toggler(ToggleableEnum.AddGroup))}
          >
            Cancel
          </Button>
        </form>
      ) : (
        <Button
          variant="gradient"
          color="blue"
          className="flex gap-2 capitalize"
          onClick={() => dispatch(toggler(ToggleableEnum.AddGroup))}
        >
          <PlusIcon className="h-4 aspect-square" />
          Add new group
        </Button>
      )}
    </div>
  );
}

AddGroup.displayName =
  "/src/features/projects/inventory/content/atoms/AddGroup.tsx";

export default AddGroup;
