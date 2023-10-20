import { Fragment } from "react";
import { CardBody, Typography } from "@material-tailwind/react";
import { EditMode, ViewMode } from "./index";
import { Group } from "@/interfaces";
import { useAppSelector } from "@/hooks";

function Body({ group }: { group: Group }) {
  const {
    editing: { id, isEditing },
  } = useAppSelector((state) => state.ui);

  const style: string = "border-b border-blue-gray-50 py-3 px-5 text-left";

  return (
    <CardBody
      className={"px-1 rounded-lg " + (group.isCollapsed ? "" : "hidden")}
    >
      <table className="w-full grid">
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
                  <EditMode tasks={group.tasks} task={task} classes={classes} />
                ) : (
                  <ViewMode task={task} classes={classes} />
                )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
    </CardBody>
  );
}

Body.displayName = "/src/features/projects/content/body/Body.tsx";

export default Body;
