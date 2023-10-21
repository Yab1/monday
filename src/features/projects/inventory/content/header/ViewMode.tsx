import {
  Button,
  CardHeader,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PencilIcon,
  // ChevronUpDownIcon,
  EllipsisHorizontalIcon,
  ChevronRightIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { Group } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleConfirmationDialog, toggleEditMode } from "@/slices";
import { TargetEnum, ActionEnum, StatusEnum } from "@/enum";
import { alterRecord } from "@/features";

function ViewMode({ group }: { group: Group }) {
  const projects = useAppSelector((state) => state.projects);
  const { editing } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const date = new Date();
  const formattedDate = format(date, "MM-dd-yyyy");

  const toggleGroup = () => {
    const newGroup = { ...group, isCollapsed: !group.isCollapsed };

    dispatch(
      alterRecord({
        id: group.id,
        data: projects,
        payload: newGroup,
        target: TargetEnum.Group,
        actionType: ActionEnum.Update,
      })
    );
  };

  const addTask = () => {
    let num: number = 0;
    if (group.tasks.length > 0) {
      group.tasks.forEach((task) => {
        if (task.title.includes("Untitled Task")) {
          num++;
        }
      });
    }

    const newTask = {
      id: uuidv4(),
      title: `Untitled Task ${num === 0 ? "" : num}`,
      assignedTeamMembers: [],
      dueDate: formattedDate,
      status: StatusEnum.Pending,
      creator: "1",
    };

    dispatch(
      alterRecord({
        id: group.id,
        data: projects,
        payload: newTask,
        target: TargetEnum.Task,
        actionType: ActionEnum.Add,
      })
    );
  };

  return (
    <CardHeader
      variant="gradient"
      color="blue-gray"
      className={"flex items-center p-5 " + (group.isCollapsed ? "" : "m-0")}
    >
      <IconButton variant="text" className="p-0 mr-2" onClick={toggleGroup}>
        {group.isCollapsed ? (
          <ChevronDownIcon className="h-4 aspect-square" />
        ) : (
          <ChevronRightIcon className="h-4 aspect-square" />
        )}
      </IconButton>

      <Typography variant="h6" color="white" className="capitalize">
        {group.groupName}
      </Typography>

      {editing.isEditing ? null : (
        <div className="flex gap-2 ml-auto">
          <Tooltip
            content="Add a new task"
            placement="bottom"
            className="text-xs text-blue-gray-900 bg-blue-gray-50"
          >
            <Button variant="text" className="p-1" onClick={addTask}>
              <PlusIcon className="h-5 text-white aspect-square" />
            </Button>
          </Tooltip>

          <Menu>
            <MenuHandler>
              <Button variant="text" className="p-0">
                <EllipsisHorizontalIcon
                  color="white"
                  className="w-6 aspect-square"
                />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="flex items-center gap-2"
                onClick={() => dispatch(toggleEditMode(group.id))}
              >
                <PencilIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Rename Group
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2"
                onClick={() => {
                  const id = group.id;
                  const type = TargetEnum.Group;
                  dispatch(toggleConfirmationDialog({ id, type }));
                }}
              >
                <TrashIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Delete Group
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      )}
    </CardHeader>
  );
}

ViewMode.displayName = "/src/features/projects/content/header/ViewMode.tsx";

export default ViewMode;
