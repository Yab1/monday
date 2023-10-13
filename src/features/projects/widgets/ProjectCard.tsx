import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Chip,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {
  InformationCircleIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { toggleDialog } from "@/common";
import { ConfirmationDialog } from "@/widgets";
import { toggleConfirmationDialog } from "@/common";
import { TargetEnum } from "@/enum";
import { updateProject } from "../slice";

function ProjectCard() {
  const selectedProject = useAppSelector((state) => state.selectedProject);

  const dispatch = useAppDispatch();

  const chipColor =
    selectedProject.status === "Pending"
      ? "blue-gray"
      : selectedProject.status === "Completed"
      ? "green"
      : "yellow";

  return (
    <Fragment>
      <div className="mt-10 flex items-cent1er">
        <Typography variant="h3" className="capitalize mr-4">
          {selectedProject.label}
        </Typography>

        <Tooltip
          placement="bottom"
          className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
          content={
            <Typography variant="small" color="blue-gray">
              {selectedProject.description}
            </Typography>
          }
        >
          <InformationCircleIcon className="w-5" />
        </Tooltip>

        <div className="flex gap-3 ml-auto mr-5">
          <Menu>
            <MenuHandler>
              <Chip
                color={chipColor}
                value={selectedProject.status}
                className="py-1 px-3 text-xs font-body capitalize rounded-xl h-fit self-center cursor-pointer"
              />
            </MenuHandler>
            <MenuList className="bg-gray-200 shadow-none flex flex-col gap-2 w-fit">
              <MenuItem
                className="bg-blue-gray-700 text-white w-fit text-xs font-body py-1 px-3 rounded-full"
                onClick={() =>
                  dispatch(
                    updateProject({
                      ...selectedProject,
                      status: "Pending",
                    })
                  )
                }
              >
                Pending
              </MenuItem>
              <MenuItem
                className="bg-yellow-500 text-blue-gray-900 w-fit text-xs font-body py-1 px-3 rounded-full"
                onClick={() =>
                  dispatch(
                    updateProject({
                      ...selectedProject,
                      status: "In Progress",
                    })
                  )
                }
              >
                In Progress
              </MenuItem>
              <MenuItem
                className="bg-green-500 text-white w-fit text-xs font-body py-1 px-3 rounded-full"
                onClick={() =>
                  dispatch(
                    updateProject({
                      ...selectedProject,
                      status: "Completed",
                    })
                  )
                }
              >
                Completed
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button variant="text" className="p-1 rounded-full h-fit my-auto">
                <EllipsisHorizontalIcon className="w-6 aspect-square" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="flex items-center gap-2"
                onClick={() => dispatch(toggleDialog("isEditDialogOpen"))}
              >
                <PencilIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Edit Project
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2 border"
                onClick={() =>
                  dispatch(toggleConfirmationDialog(TargetEnum.Project))
                }
              >
                <TrashIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Delete Project
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <ConfirmationDialog />
    </Fragment>
  );
}

ProjectCard.displayName = "/src/features/projects/widgets/ProjectCard.tsx";

export default ProjectCard;
