import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  // ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  // ArrowUpIcon,
} from "@heroicons/react/24/outline";
import Row from "./Row";
import { projectsTableData } from "@/data";
import { useAppSelector } from "@/hooks";
import { RootState } from "@/redux";

function ProjectOverviewTable() {
  const { projects } = useAppSelector((state: RootState) => state.firestore);

  return (
    <Card className="overflow-hidden xl:col-span-2">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex items-center justify-between p-6 m-0"
      >
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-1">
            Projects
          </Typography>
          <Typography
            variant="small"
            className="flex items-center gap-1 font-normal text-blue-gray-600"
          >
            <CheckIcon strokeWidth={3} className="w-4 h-4 text-blue-500" />
            <strong>0 done</strong> this month
          </Typography>
        </div>
        <Menu placement="left-start">
          <MenuHandler>
            <IconButton size="sm" variant="text" color="blue-gray">
              <EllipsisVerticalIcon
                strokeWidth={3}
                fill="currenColor"
                className="w-6 h-6"
              />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem>Action</MenuItem>
            <MenuItem>Another Action</MenuItem>
            <MenuItem>Something else here</MenuItem>
          </MenuList>
        </Menu>
      </CardHeader>

      <CardBody className="px-0 pt-0 pb-2 overflow-x-scroll">
        <table className="w-full min-w-[640px] table-auto">
          <thead>
            <tr>
              {["projects", "members", "status", "completion"].map((el) => (
                <th
                  key={el}
                  className="px-6 py-3 text-left border-b border-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-medium uppercase text-blue-gray-400"
                  >
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{projects.length > 0 ? <Row /> : null}</tbody>
        </table>
      </CardBody>
    </Card>
  );
}

ProjectOverviewTable.displayName =
  "/src/features/dashboard/pages/home/widgets/ProjectOverviewTable.tsx";

export default ProjectOverviewTable;
