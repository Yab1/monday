import { Fragment } from "react";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  IconButton,
  // Tooltip,
  CardHeader,
  // CardFooter,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  // ChevronUpDownIcon,
  EllipsisHorizontalIcon,
  ChevronRightIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { toggleGroup } from "../slice";
import { DeleteType } from "@/enum";
import { toggleConfirmationDialog } from "@/common";

const TABLE_HEAD = ["Title", "Assigned Team Members", "Due Date", "Status", ""];

function ProjectTable() {
  const { groups } = useAppSelector((state) => state.selectedProject);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      {groups.map(({ id, groupName, isCollapsed, tasks }) => (
        <Card key={id} className="w-full mb-10">
          <CardHeader
            variant="gradient"
            color="green"
            className={
              "flex items-center mb-7 p-5 " + (isCollapsed ? "" : "m-0")
            }
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

            <div className="ml-auto">
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
                  <MenuItem className="flex items-center gap-2">
                    <PencilIcon className="w-4 aspect-square" />
                    <Typography variant="small" className="font-normal">
                      Edit Group
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    className="flex items-center gap-2"
                    onClick={() =>
                      dispatch(toggleConfirmationDialog(DeleteType.Group))
                    }
                  >
                    <TrashIcon className="w-4 aspect-square" />
                    <Typography variant="small" className="font-normal">
                      Delete Group
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </CardHeader>
          <CardBody
            className={"px-1 rounded-lg " + (isCollapsed ? "" : "hidden")}
          >
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-50 py-3 px-5 text-left"
                    >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {head}
                        {/* {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )} */}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tasks.map(
                  (
                    { id, title, assignedTeamMembers, dueDate, status },
                    index
                  ) => {
                    const classes = `py-3 px-5 ${
                      index === tasks.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={id}>
                        <td className={classes}>
                          <div className="flex items-center gap-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {title}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {assignedTeamMembers}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {dueDate}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="gradient"
                              size="sm"
                              value={status}
                              color={"green"}
                              className="py-0.5 px-2 text-sm font-medium capitalize"
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Menu>
                            <MenuHandler>
                              <Button variant="text" className="p-0">
                                <EllipsisHorizontalIcon className="w-6 aspect-square" />
                              </Button>
                            </MenuHandler>
                            <MenuList>
                              <MenuItem className="flex items-center gap-2">
                                <PencilIcon className="w-4 aspect-square" />
                                <Typography
                                  variant="small"
                                  className="font-normal"
                                >
                                  Edit Task
                                </Typography>
                              </MenuItem>
                              <MenuItem
                                className="flex items-center gap-2"
                                onClick={() =>
                                  dispatch(
                                    toggleConfirmationDialog(DeleteType.Task)
                                  )
                                }
                              >
                                <TrashIcon className="w-4 aspect-square" />
                                <Typography
                                  variant="small"
                                  className="font-normal"
                                >
                                  Delete Task
                                </Typography>
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      ))}
      <Button variant="outlined" className="flex gap-2 capitalize">
        <PlusIcon className="h-4 aspect-square" />
        Add new group
      </Button>
    </Fragment>
  );
}

ProjectTable.displayName = "/src/features/projects/widgets/ProjectTable.tsx";

export default ProjectTable;
