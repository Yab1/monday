import { useEffect, useState } from "react";
import {
  Typography,
  Input,
  Chip,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  EllipsisHorizontalIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { format } from "date-fns";
import { useFormik } from "formik";
import { toggleEditMode } from "@/slices";
import { colorMap } from "@/dictionaries";
import { Task, UserInterface } from "@/interfaces";
import { TargetEnum, ActionEnum, StatusEnum } from "@/enum";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { taskSchema } from "@/features/projects/schema";
import { alterRecord } from "@/features";

interface Props {
  tasks: Task[];
  task: Task;
  classes: string;
}

function EditMode({ tasks, task, classes }: Props) {
  const [team, setTeam] = useState([...task.assignedTeamMembers]);
  const [status, setStatus] = useState(task.status);
  const users = useAppSelector((state) => state.auth);
  const projects = useAppSelector((state) => state.projects);
  const dispatch = useAppDispatch();

  const dateObject = new Date(task.dueDate);
  const formattedDate = format(dateObject, "yyyy-MM-dd");

  const addUser = (id: string) => {
    const userExists = team.includes(id);

    if (userExists) {
      const updatedUser = team.filter((user) => user !== id);
      setTeam(updatedUser);
    } else {
      setTeam((prev) => [...prev, id]);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: task.title,
      assignedTeamMembers: team,
      dueDate: formattedDate,
      status: status,
    },

    validationSchema: taskSchema,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: (values) => {
      const updatedTask = {
        ...task,
        ...values,
      };

      const newDate = new Date(values.dueDate);
      updatedTask.dueDate = format(newDate, "MM-dd-yyyy");

      const isDuplicated = tasks.filter((task) => task.title === values.title);

      if (isDuplicated.length === 0 || isDuplicated[0].id === task.id) {
        dispatch(
          alterRecord({
            id: task.id,
            data: projects,
            payload: updatedTask,
            target: TargetEnum.Task,
            actionType: ActionEnum.Update,
          })
        );

        dispatch(toggleEditMode(""));
      } else {
        formik.setFieldError(
          "title",
          "A Task with the same name already exists"
        );
      }
    },
  });

  useEffect(() => {
    formik.values.status = status;
  }, [status]);

  useEffect(() => {
    formik.values.assignedTeamMembers = team;
  }, [team]);

  const renderMenu = users.map((user) => (
    <MenuItem
      key={user.id}
      className={
        "flex items-center gap-4 py-1 pl-2 pr-8 " +
        (team.includes(user.id)
          ? "border border-dashed border-blue-gray-100"
          : "")
      }
      onClick={() => addUser(user.id)}
    >
      <Avatar
        alt={user.name}
        src={user.profile}
        className={
          "border-2 " + (user.isOnline ? "border-green-500" : "border-gray-400")
        }
      />
      <div className="flex flex-col gap-1">
        <Typography variant="small" color="gray" className="font-semibold">
          {user.name}
        </Typography>
        <Typography className="flex items-center gap-1 text-sm font-medium text-blue-gray-500">
          {user.position}
        </Typography>
      </div>
    </MenuItem>
  ));

  return (
    <tr className="grid grid-cols-12">
      <td className={classes + " col-span-5"}>
        <div className="flex items-center gap-4 relative">
          <Input
            crossOrigin={undefined}
            id="title"
            variant="outlined"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.title)}
            labelProps={{
              className: "hidden",
            }}
            className="!border !border-gray-400"
          />
          {formik.errors.title && (
            <Typography
              variant="small"
              color="red"
              className="ml-3 text-xs absolute top-10"
            >
              {formik.errors.title}
            </Typography>
          )}
        </div>
      </td>
      <td className={classes + " col-span-2 !px-0 flex place-content-center"}>
        <Menu>
          <MenuHandler>
            <div className="flex items-center gap-2 -space-x-4">
              {team.map((id) => {
                const currentUser: UserInterface = users.filter(
                  (user) => user.id === id
                )[0];
                return (
                  <Avatar
                    key={id}
                    src={currentUser.profile}
                    alt="avatar"
                    size="xs"
                    variant="circular"
                    className="hover:z-10 focus:z-10"
                  />
                );
              })}
            </div>
          </MenuHandler>
          <MenuList className="flex flex-col gap-2 h-80">
            {users.length > 0 ? (
              renderMenu
            ) : (
              <Typography variant="small">NO Assigned User</Typography>
            )}
          </MenuList>
        </Menu>
      </td>
      <td className={classes + " col-span-2 !px-2"}>
        <Input
          id="dueDate"
          type="date"
          crossOrigin={undefined}
          value={formik.values.dueDate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          labelProps={{
            className: "hidden",
          }}
          className="!border !border-none !w-fit"
        />
      </td>
      <td className={classes + " col-span-2 flex items-center"}>
        <div className="!w-fit flex place-content-center">
          <Menu>
            <MenuHandler>
              <Chip
                color={colorMap[status]}
                value={status}
                className="py-1 px-3 text-xs font-normal capitalize rounded-xl h-fit self-center cursor-pointer"
              />
            </MenuHandler>
            <MenuList className="bg-gray-200 shadow-none flex flex-col gap-2 w-fit ">
              <MenuItem
                className="bg-blue-gray-700 text-white w-fit text-xs font-body py-1 px-3 rounded-full hover:text-blue-gray-700"
                onClick={() => setStatus(StatusEnum.Pending)}
              >
                Pending
              </MenuItem>
              <MenuItem
                className="bg-yellow-500 text-blue-gray-900 w-fit text-xs font-body py-1 px-3 rounded-full hover:text-yellow-500"
                onClick={() => setStatus(StatusEnum["Ready for Review"])}
              >
                Ready For Review
              </MenuItem>
              <MenuItem
                className="bg-green-500 text-white w-fit text-xs font-body py-1 px-3 rounded-full hover:text-green-500"
                onClick={() => setStatus(StatusEnum.Completed)}
              >
                Completed
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </td>
      <td className={classes + " col-span-1 flex place-content-center"}>
        <Menu>
          <MenuHandler>
            <Button variant="text" className="p-0">
              <EllipsisHorizontalIcon className="w-6 aspect-square" />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              type="submit"
              className="flex items-center gap-2 text-green-500"
              onClick={() => formik.handleSubmit()}
            >
              <CheckIcon className="w-4 aspect-square" />
              <Typography variant="small" className="font-normal">
                Save
              </Typography>
            </MenuItem>
            <MenuItem
              className="flex items-center gap-2 text-red-500"
              onClick={() => dispatch(toggleEditMode(""))}
            >
              <XMarkIcon className="w-4 aspect-square" />
              <Typography variant="small" className="font-normal">
                Cancel
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </td>
    </tr>
  );
}

EditMode.displayName = "/src/features/projects/content/body/EditMode.tsx";

export default EditMode;
