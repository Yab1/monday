import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { projectSchema } from "../../schema";
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
import { toggler } from "@/slices";
import { alterRecord } from "../../slice";
import { ActionEnum, TargetEnum, ToggleableEnum } from "@/enum";
import { getCurrentDate } from "@/function";

function NewProjectDialog() {
  const {
    toggleable: { addProjectDialog },
  } = useAppSelector((state) => state.ui);
  const projects = useAppSelector((state) => state.projects);
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
      const newProject = {
        id: uuidv4(),
        label: values.projectTitle,
        status: "Pending",
        description: values.projectDescription,
        timestamp: getCurrentDate(),
        creator: "1",
        groups: [],
      };
      const isDuplicated = projects.filter(
        (project) => project.label === values.projectTitle
      );

      if (isDuplicated.length === 0) {
        dispatch(
          alterRecord({
            id: uuidv4(),
            data: projects,
            payload: newProject,
            actionType: ActionEnum.Add,
            target: TargetEnum.Project,
          })
        );
        formik.resetForm();
        dispatch(toggler(ToggleableEnum.AddProjectDialog));
      } else {
        formik.setFieldError(
          "projectTitle",
          "A project with the same name already exists"
        );
      }
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
          className="relative grid gap-7 mb-3"
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
              className="ml-3 text-xs absolute top-10"
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
                className="ml-3 text-xs absolute top-44"
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
