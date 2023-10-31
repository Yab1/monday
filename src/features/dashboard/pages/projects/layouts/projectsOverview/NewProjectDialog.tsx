import { useFormik } from "formik";
import { projectSchema } from "@/features/dashboard/pages/projects/schema";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggler, alterCollection } from "@/redux/slices";
import {
  ActionEnum,
  ProjectStatusEnum,
  TargetEnum,
  ToggleableEnum,
} from "@/enum";
import { getCurrentDate } from "@/function";
import { IProjectMetaData } from "@/interfaces";

function NewProjectDialog() {
  const {
    toggleable: { addProjectDialog },
  } = useAppSelector((state) => state.ui);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      projectTitle: "",
      projectDescription: "",
    },
    validationSchema: projectSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      const projectMetaData: IProjectMetaData = {
        label: values.projectTitle,
        status: ProjectStatusEnum.Active,
        description: values.projectDescription,
        timestamp: getCurrentDate(),
        creator: user.id,
      };

      dispatch(
        alterCollection({
          target: TargetEnum.Project,
          actionType: ActionEnum.CREATE,
          data: projectMetaData,
        })
      );
      dispatch(toggler(ToggleableEnum.AddProjectDialog));
      formik.resetForm();
    },
  });

  return (
    <Dialog
      open={addProjectDialog}
      handler={() => dispatch(toggler(ToggleableEnum.AddProjectDialog))}
    >
      <div className="flex items-center justify-between">
        <DialogHeader>New Project</DialogHeader>
      </div>
      <DialogBody divider>
        <form
          onSubmit={formik.handleSubmit}
          className="relative grid mb-3 gap-7"
        >
          <Input
            crossOrigin={undefined}
            id="projectTitle"
            label="Project Title"
            value={formik.values.projectTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.projectTitle)}
          />
          {formik.errors.projectTitle && (
            <Typography
              variant="small"
              color="red"
              className="absolute ml-3 text-xs top-10"
            >
              {formik.errors.projectTitle}
            </Typography>
          )}
          <Textarea
            rows={1}
            id="projectDescription"
            className="h-full"
            label="Project Description"
            value={formik.values.projectDescription}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.projectDescription &&
              Boolean(formik.errors.projectDescription)
            }
          />
          {formik.touched.projectDescription &&
            formik.errors.projectDescription && (
              <Typography
                variant="small"
                color="red"
                className="absolute ml-3 text-xs top-44"
              >
                {formik.errors.projectDescription}
              </Typography>
            )}
        </form>
      </DialogBody>
      <DialogFooter className="space-x-2">
        <Button
          variant="outlined"
          color="red"
          onClick={() => {
            dispatch(toggler(ToggleableEnum.AddProjectDialog));
            formik.resetForm();
          }}
        >
          Cancel
        </Button>
        <Button
          variant="gradient"
          color="green"
          type="submit"
          onClick={() => formik.handleSubmit()}
        >
          Save
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

NewProjectDialog.displayName =
  "/src/features/projects/inventory/selector/NewProjectDialog.tsx";

export default NewProjectDialog;
