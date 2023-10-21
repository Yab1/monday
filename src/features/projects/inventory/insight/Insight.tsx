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
      <div className="flex mt-10 items-cent1er">
        <Typography
          variant="h3"
          className="mr-4 capitalize"
          onDoubleClick={() =>
            dispatch(toggler(ToggleableEnum.EditProjectDialog))
          }
        >
          {selectedProject.label}
        </Typography>

        <Tooltip
          placement="right"
          className="text-xs shadow-lg text-blue-gray-900 bg-blue-gray-50"
          content={
            selectedProject.description ? (
              <Typography variant="small" color="blue-gray">
                {selectedProject.description}
              </Typography>
            ) : (
              <Typography variant="small" className="text-blue-gray-500">
                No project description available
              </Typography>
            )
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
                className="self-center px-3 py-1 text-xs capitalize cursor-pointer font-body rounded-xl h-fit"
              />
            </MenuHandler>
            {editing.isEditing ? null : (
              <MenuList className="flex flex-col gap-2 bg-gray-200 shadow-none w-fit">
                <MenuItem
                  className="px-3 py-1 text-xs text-white rounded-full bg-blue-gray-700 w-fit font-body"
                  onClick={() => dispatcher(StatusEnum.Pending)}
                >
                  Pending
                </MenuItem>
                <MenuItem
                  className="px-3 py-1 text-xs bg-yellow-500 rounded-full text-blue-gray-900 w-fit font-body"
                  onClick={() => dispatcher(StatusEnum["In Progress"])}
                >
                  In Progress
                </MenuItem>
                <MenuItem
                  className="px-3 py-1 text-xs text-white bg-green-500 rounded-full w-fit font-body"
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
                  className="p-1 my-auto rounded-full h-fit"
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
