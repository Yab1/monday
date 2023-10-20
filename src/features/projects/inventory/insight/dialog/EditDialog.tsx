import { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Textarea,
  Typography,
  Avatar,
  Progress,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { format } from "date-fns";
import { projectSchema } from "@/features/projects/schema";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggler } from "@/slices";
import { alterRecord } from "@/features/projects/slice";
import { ActionEnum, TargetEnum, ToggleableEnum } from "@/enum";

function EditDialog() {
  const {
    toggleable: { editProjectDialog },
  } = useAppSelector((state) => state.ui);
  const projects = useAppSelector((state) => state.projects);
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const users = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const date = new Date(selectedProject.timestamp);
  const formattedDate = format(date, "MMMM dd, yyyy");

  const creator = users.filter(
    (user) => user.id === selectedProject.creator
  )[0];

  const formik = useFormik({
    initialValues: {
      projectTitle: selectedProject.label,
      projectDescription: selectedProject.description,
    },
    validationSchema: projectSchema,
    onSubmit: (values) => {
      const updatedProject = {
        ...selectedProject,
        label: values.projectTitle,
        description: values.projectDescription,
      };

      const isDuplicated = projects.filter(
        (project) => project.label === values.projectTitle
      );

      if (
        isDuplicated.length === 0 ||
        isDuplicated[0].id === selectedProject.id
      ) {
        dispatch(
          alterRecord({
            id: selectedProject.id,
            data: projects,
            payload: updatedProject,
            target: TargetEnum.Project,
            actionType: ActionEnum.Update,
          })
        );
        dispatch(toggler(ToggleableEnum.EditProjectDialog));
      } else {
        formik.setFieldError(
          "projectTitle",
          "A project with the same name already exists"
        );
      }
    },
  });

  useEffect(() => {
    formik.values.projectTitle = selectedProject.label;
    formik.values.projectDescription = selectedProject.description;
  }, [selectedProject]);

  return (
    <Dialog
      open={editProjectDialog}
      handler={() => dispatch(toggler(ToggleableEnum.EditProjectDialog))}
    >
      <DialogBody className="grid grid-cols-12 p-0">
        <form className="col-start-1 col-span-7 px-8 pb-8 pt-4 relative flex flex-col gap-8">
          <Input
            crossOrigin={undefined}
            id="projectTitle"
            label="Project Title"
            value={formik.values.projectTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.projectTitle && Boolean(formik.errors.projectTitle)
            }
          />
          {formik.touched.projectTitle && formik.errors.projectTitle && (
            <Typography
              variant="small"
              color="red"
              className="ml-3 text-xs absolute top-14"
            >
              {formik.errors.projectTitle}
            </Typography>
          )}
          <Textarea
            rows={11}
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
                className="ml-3 text-xs absolute top-[340px]"
              >
                {formik.errors.projectDescription}
              </Typography>
            )}
        </form>

        <div className="col-start-8 col-span-full bg-blue-gray-50 rounded-r-xl pl-5 p-8 grid">
          <Typography variant="paragraph" className="text-black mb-6">
            Project info
          </Typography>

          <div className="flex flex-col mb-6">
            <Typography
              variant="small"
              className="text-blue-gray-600 mb-2 font-light"
            >
              Created by
              <span></span>
            </Typography>
            <div className="flex items-center gap-2">
              <Avatar
                src={creator.profile}
                alt={`Profile picture of the project's administrator, ${creator.name}, who created this project.`}
                size="xs"
              />
              <Typography variant="small" className="text-gray-800 text-sm">
                {formattedDate}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <Typography variant="small" className="text-blue-gray-600 mb-2">
              Team Members
              <span></span>
            </Typography>
            <div className="flex items-center gap-2 -space-x-4">
              <Avatar
                src={creator.profile}
                alt="avatar"
                size="xs"
                variant="circular"
                className="hover:z-10 focus:z-10"
              />
              <Avatar
                src={creator.profile}
                alt="avatar"
                size="xs"
                variant="circular"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <Typography variant="small" className="text-blue-gray-600 mb-2">
              Progress
              <span></span>
            </Typography>
            <div className="flex items-center gap-2">
              <Progress value={50} color="blue" className="h-1 bg-white" />
              <Typography
                variant="small"
                className="mb-1 block text-xs font-medium text-blue-gray-600"
              >
                50%
              </Typography>
            </div>
          </div>
          <Button
            type="submit"
            size="sm"
            color="green"
            onClick={() => formik.handleSubmit()}
          >
            Save
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

EditDialog.displayName =
  "/src/features/projects/inventory/insight/dialog/EditDialog.tsx";

export default EditDialog;
