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
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleDialog } from "@/common";
import AvatarPublic from "../../../../public/img/team-1.jpeg";

function ProjectDialog() {
  const { isEditDialogOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <Dialog
      open={isEditDialogOpen}
      handler={() => dispatch(toggleDialog("isEditDialogOpen"))}
    >
      <DialogBody className="grid grid-cols-12 p-0">
        <div className="col-start-1 col-span-7 px-8 pb-8 pt-4 flex flex-col gap-5">
          <Input crossOrigin={undefined} label="Project Title" />
          <Textarea rows={11} className="h-full" label="Project Description" />
        </div>
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
          <Button size="sm" color="green">
            Save
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  );
}

ProjectDialog.displayName = "/src/features/projects/widgets/ProjectDialog.tsx";

export default ProjectDialog;
