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
import { toggleConfirmationDialog, toggler } from "@/slices";
import { ActionEnum, StatusEnum, TargetEnum, ToggleableEnum } from "@/enum";
import { colorMap } from "@/dictionaries";
import { alterRecord } from "@/features/projects/slice";
import EditDialog from "./dialog/EditDialog";

function Insight() {
  const projects = useAppSelector((state) => state.projects);
  const selectedProject = useAppSelector((state) => state.selectedProject);
  const { editing } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const dispatcher = (status: StatusEnum) => {
    const updatedProject = {
      ...selectedProject,
      status: status,
    };
    dispatch(
      alterRecord({
        id: selectedProject.id,
        data: projects,
        payload: updatedProject,
        target: TargetEnum.Project,
        actionType: ActionEnum.Update,
      })
    );
  };

  return (
    <Fragment>
      <div className="mt-10 flex items-cent1er">
        <Typography variant="h3" className="capitalize mr-4">
          {selectedProject.label}
        </Typography>

        <Tooltip
          placement="right"
          className="text-xs text-blue-gray-900 bg-blue-gray-50 shadow-lg"
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
                color={colorMap[selectedProject.status]}
                value={selectedProject.status}
                className="py-1 px-3 text-xs font-body capitalize rounded-xl h-fit self-center cursor-pointer"
              />
            </MenuHandler>
            {editing.isEditing ? null : (
              <MenuList className="bg-gray-200 shadow-none flex flex-col gap-2 w-fit">
                <MenuItem
                  className="bg-blue-gray-700 text-white w-fit text-xs font-body py-1 px-3 rounded-full"
                  onClick={() => dispatcher(StatusEnum.Pending)}
                >
                  Pending
                </MenuItem>
                <MenuItem
                  className="bg-yellow-500 text-blue-gray-900 w-fit text-xs font-body py-1 px-3 rounded-full"
                  onClick={() => dispatcher(StatusEnum["In Progress"])}
                >
                  In Progress
                </MenuItem>
                <MenuItem
                  className="bg-green-500 text-white w-fit text-xs font-body py-1 px-3 rounded-full"
                  onClick={() => dispatcher(StatusEnum.Completed)}
                >
                  Completed
                </MenuItem>
              </MenuList>
            )}
          </Menu>
          {editing.isEditing ? null : (
            <Menu>
              <MenuHandler>
                <Button
                  variant="text"
                  className="p-1 rounded-full h-fit my-auto"
                >
                  <EllipsisHorizontalIcon className="w-6 aspect-square" />
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={() =>
                    dispatch(toggler(ToggleableEnum.EditProjectDialog))
                  }
                >
                  <PencilIcon className="w-4 aspect-square" />
                  <Typography variant="small" className="font-normal">
                    Edit Project
                  </Typography>
                </MenuItem>
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={() => {
                    const id = selectedProject.id;
                    const type = TargetEnum.Project;
                    dispatch(toggleConfirmationDialog({ id, type }));
                  }}
                >
                  <TrashIcon className="w-4 aspect-square" />
                  <Typography variant="small" className="font-normal">
                    Delete Project
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </div>
      </div>
      <EditDialog />
    </Fragment>
  );
}

Insight.displayName = "/src/features/projects/inventory/insight/Insight.tsx";

export default Insight;
