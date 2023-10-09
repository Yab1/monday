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
import { object, string } from "yup";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleDialog } from "@/common";
import { updateProject } from "../slice";
import AvatarPublic from "../../../../public/img/team-1.jpeg";
import { Fragment } from "react";

function ProjectDialog() {
  const { isEditDialogOpen } = useAppSelector((state) => state.ui);
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const dispatch = useAppDispatch();

  const validationSchema = object({
    projectTitle: string()
      .required("Project title is required")
      .min(4, "Project title must be at least 4 characters")
      .max(60, "Project title must be at most 60 characters"),
    projectDescription: string().max(
      150,
      "Project description must be at most 150 characters"
    ),
  });

  const formik = useFormik({
    initialValues: {
      projectTitle: selectedProject.label,
      projectDescription: selectedProject.description,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        updateProject({
          ...selectedProject,
          label: values.projectTitle,
          description: values.projectDescription,
        })
      );
    },
  });

  return (
    <Dialog
      open={isEditDialogOpen}
      handler={() => dispatch(toggleDialog("isEditDialogOpen"))}
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
              <Avatar src={AvatarPublic} alt="avatar" size="xs" />
              <Typography variant="small" className="text-gray-800 text-sm">
                September 25, 2023
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
                src={AvatarPublic}
                alt="avatar"
                size="xs"
                variant="circular"
                className="hover:z-10 focus:z-10"
              />
              <Avatar
                src={AvatarPublic}
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

ProjectDialog.displayName = "/src/features/projects/widgets/ProjectDialog.tsx";

export default ProjectDialog;
