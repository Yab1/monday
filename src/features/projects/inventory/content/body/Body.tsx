import { Fragment } from "react";
import { Button, CardBody, Typography } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { EditMode, ViewMode } from "./index";
import { Group } from "@/interfaces";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { alterRecord } from "@/features";
import { ActionEnum, StatusEnum, TargetEnum } from "@/enum";

function Body({ group }: { group: Group }) {
  const projects = useAppSelector((state) => state.projects);
  const {
    editing: { id, isEditing },
  } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const style: string = "border-b border-blue-gray-50 py-3 px-5 text-left";

  const date = new Date();
  const formattedDate = format(date, "MM-dd-yyyy");

  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      title: "Untitled Task",
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
    <Fragment>
      <CardBody
        className={"px-1 rounded-lg " + (group.isCollapsed ? "" : "hidden")}
      >
        {group.tasks.length > 0 ? (
          <table className="grid w-full mt-7">
            <thead>
              <tr className="grid grid-cols-12">
                <th className={style + " col-span-5"}>
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    Title
                  </Typography>
                </th>
                <th className={style + " col-span-2"}>
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    Team Members
                  </Typography>
                </th>
                <th className={style + " col-span-2"}>
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    Due Date
                  </Typography>
                </th>
                <th className={style + " col-span-2"}>
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    Status
                  </Typography>
                </th>
                <th className={style + " col-span-1"}></th>
              </tr>
            </thead>
            <tbody>
              {group.tasks.map((task, index) => {
                const classes = `py-3 px-5 h-full ${
                  index === group.tasks.length - 1
                    ? ""
                    : "border-b border-blue-gray-50"
                }`;

                return (
                  <Fragment key={task.id}>
                    {isEditing && task.id === id ? (
                      <EditMode
                        tasks={group.tasks}
                        task={task}
                        classes={classes}
                      />
                    ) : (
                      <ViewMode task={task} classes={classes} />
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center">
            <Typography variant="h5" className="text-gray-400 cursor-default">
              No Task Found
            </Typography>
            <Button
              variant="text"
              color="blue"
              className="flex gap-2 text-gray-400 normal-case"
              onClick={addTask}
            >
              <PlusIcon className="h-4 aspect-square" />
              Add Task
            </Button>
          </div>
        )}
      </CardBody>
    </Fragment>
  );
}

Body.displayName = "/src/features/projects/content/body/Body.tsx";

export default Body;
