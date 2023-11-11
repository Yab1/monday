import { RootState } from "@/redux";
import {
  Typography,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { useAppSelector } from "@/hooks";
import { Fragment } from "react";

function Row() {
  const { projects } = useAppSelector((state: RootState) => state.firestore);

  const renderProjects = projects.map(
    ({ id, label, status, members }, index) => {
      const className = `py-3 px-5 ${
        index === projects.length - 1 ? "" : "border-b border-blue-gray-50"
      }`;

      const completion: number = 20;

      return (
        <tr key={id} onClick={() => console.log(id)}>
          <td className={className}>
            <div className="flex items-center gap-4">
              {/* <Avatar src={img} alt={name} size="sm" /> */}
              <Typography
                variant="small"
                color="blue-gray"
                className="font-bold"
              >
                {label}
              </Typography>
            </div>
          </td>
          <td className={className}>
            {members.map(({ name, photoURL }, key) => (
              <Tooltip key={name} content={name}>
                <Avatar
                  src={photoURL}
                  alt={name}
                  size="xs"
                  variant="circular"
                  className={`cursor-pointer border-2 border-white ${
                    key === 0 ? "" : "-ml-2.5"
                  }`}
                />
              </Tooltip>
            ))}
          </td>
          <td className={className}>
            <Typography
              variant="small"
              className="text-xs font-medium text-blue-gray-600"
            >
              {status}
            </Typography>
          </td>
          <td className={className}>
            <div className="w-10/12">
              <Typography
                variant="small"
                className="block mb-1 text-xs font-medium text-blue-gray-600"
              >
                {completion}%
              </Typography>
              <Progress
                value={completion}
                variant="gradient"
                color={completion === 100 ? "green" : "blue"}
                className="h-1"
              />
            </div>
          </td>
        </tr>
      );
    }
  );

  return <Fragment>{renderProjects}</Fragment>;
}

export default Row;
