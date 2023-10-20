import { useFormik } from "formik";
import {
  Button,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { TargetEnum, ActionEnum } from "@/enum";
import { Group } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { alterRecord } from "@/features/projects/slice";
import { groupSchema } from "@/features/projects/schema";
import { toggleEditMode } from "@/slices";

function EditMode({ group }: { group: Group }) {
  const projects = useAppSelector((state) => state.projects);
  const { groups } = useAppSelector((state) => state.selectedProject);
  // const { editing } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      groupName: group.groupName,
    },

    validationSchema: groupSchema,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (values) => {
      const updatedGroup = {
        ...group,
        groupName: values.groupName,
      };

      const isDuplicated = groups.filter(
        (group) => group.groupName === values.groupName
      );

      if (isDuplicated.length === 0 || isDuplicated[0].id === group.id) {
        dispatch(
          alterRecord({
            id: group.id,
            data: projects,
            payload: updatedGroup,
            target: TargetEnum.Group,
            actionType: ActionEnum.Update,
          })
        );
        formik.resetForm();
        dispatch(toggleEditMode(""));
      } else {
        formik.setFieldError(
          "groupName",
          "A Group with the same name already exists"
        );
      }
    },
  });

  return (
    <CardHeader className="flex items-center mb-7 p-5 bg-none shadow-none m-0">
      <form
        onSubmit={formik.handleSubmit}
        className="flex items-center gap-4 w-full"
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
          variant="outlined"
          color="green"
          className="rounded-full p-2 ml-auto"
          type="submit"
        >
          <CheckIcon className="w-4 aspect-square" />
        </Button>
        <Button
          variant="outlined"
          color="red"
          className="rounded-full p-2"
          onClick={() => dispatch(toggleEditMode(""))}
        >
          <XMarkIcon className="w-4 aspect-square" />
        </Button>
      </form>
    </CardHeader>
  );
}

EditMode.displayName = "/src/features/projects/content/header/EditMode.tsx";

export default EditMode;
