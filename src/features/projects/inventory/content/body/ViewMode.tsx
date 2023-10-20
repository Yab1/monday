import {
  Typography,
  Avatar,
  Chip,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
} from "@material-tailwind/react";
import {
  PencilIcon,
  // ChevronUpDownIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Task, UserInterface } from "@/interfaces";
import { colorMap } from "@/dictionaries";
import { toggleConfirmationDialog, toggleEditMode } from "@/slices";
import { TargetEnum } from "@/enum";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { format } from "date-fns";

interface Props {
  task: Task;
  classes: string;
}

function ViewMode({ task, classes }: Props) {
  const users = useAppSelector((state) => state.auth);
  const { editing } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const dateObject = new Date(task.dueDate);
  const formattedDate = format(dateObject, "MMM dd, yyyy");

  const profiles: UserInterface[] = users.filter((user) =>
    task.assignedTeamMembers.includes(user.id)
  );

  return (
    <tr className="grid grid-cols-12 items-center">
      <td className={classes + " col-span-5"}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {task.title}
        </Typography>
      </td>
      <td className={classes + " col-span-2"}>
        <div className="flex items-center gap-2 -space-x-4 p-0 m-0">
          {profiles.map((user) => (
            <Tooltip
              content={user.name}
              placement="bottom"
              className="text-xs text-blue-gray-900 bg-blue-gray-50"
            >
              <Avatar
                key={user.id}
                src={user.profile}
                alt={user.name}
                size="xs"
                variant="circular"
                className="hover:z-10 focus:z-10"
              />
            </Tooltip>
          ))}
        </div>
      </td>
      <td className={classes + " col-span-2"}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {formattedDate}
        </Typography>
      </td>
      <td className={classes + " col-span-2"}>
        <Chip
          variant="gradient"
          size="sm"
          value={task.status}
          color={colorMap[task.status]}
          className="py-1 px-3 text-xs font-normal capitalize rounded-xl h-fit w-fit"
        />
      </td>
      <td className={classes + " col-span-1 flex place-content-center"}>
        {editing.isEditing ? null : (
          <Menu>
            <MenuHandler>
              <Button variant="text" className="p-0">
                <EllipsisHorizontalIcon className="w-6 aspect-square" />
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem
                className="flex items-center gap-2"
                onClick={() => dispatch(toggleEditMode(task.id))}
              >
                <PencilIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Edit Task
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2"
                onClick={() => {
                  const id = task.id;
                  const type = TargetEnum.Task;
                  dispatch(toggleConfirmationDialog({ id, type }));
                }}
              >
                <TrashIcon className="w-4 aspect-square" />
                <Typography variant="small" className="font-normal">
                  Delete Task
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </td>
    </tr>
  );
}

ViewMode.displayName = "/src/features/projects/content/body/ViewMode.tsx";

export default ViewMode;
