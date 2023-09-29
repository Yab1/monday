import { ChevronDownIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";

function TaskManager() {
  return (
    <div className="mt-5">
      <Button
        color="blue"
        className="rounded-e-none border border-blue-gray-50 capitalize py-2 px-3"
      >
        <Typography variant="small" className="font-light text-sm p-0 m-0">
          New Task
        </Typography>
      </Button>
      <Menu>
        <MenuHandler>
          <Button color="blue" className="rounded-s-none px-3 py-3">
            <ChevronDownIcon className="h-3 w-4" />
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem className="flex gap-2 items-center">
            <TableCellsIcon className="h-4 w-4" />
            <Typography variant="small" className="font-normal">
              New group of Tasks
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

TaskManager.displayName = "/src/features/projects/widgets/TaskManager.tsx";

export default TaskManager;
