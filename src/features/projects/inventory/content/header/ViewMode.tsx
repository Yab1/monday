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
import { Group } from "@/interfaces";
import { toggleGroup } from "@/features/projects/slice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleConfirmationDialog, toggleEditMode } from "@/slices";
import { TargetEnum } from "@/enum";

function ViewMode({ group: { id, groupName, isCollapsed } }: { group: Group }) {
  const { editing } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <CardHeader
      variant="gradient"
      color="blue-gray"
      className={"flex items-center mb-7 p-5 " + (isCollapsed ? "" : "m-0")}
    >
      <IconButton
        variant="text"
        className="p-0 mr-2"
        onClick={() => dispatch(toggleGroup(id))}
      >
        {isCollapsed ? (
          <ChevronDownIcon className="h-4 aspect-square" />
        ) : (
          <ChevronRightIcon className="h-4 aspect-square" />
        )}
      </IconButton>

      <Typography variant="h6" color="white" className="capitalize">
        {groupName}
      </Typography>

      {editing.isEditing ? null : (
        <div className="ml-auto flex gap-2">
          <Tooltip
            content="Add a new task"
            placement="bottom"
            className="text-xs text-blue-gray-900 bg-blue-gray-50"
          >
            <Button variant="text" className="p-1">
              <PlusIcon className="h-5 aspect-square text-white" />
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
                onClick={() => dispatch(toggleEditMode(id))}
              >
                <PencilIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Rename Group
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2"
                onClick={() => {
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
