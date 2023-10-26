import { Fragment, useEffect } from "react";
import {
  Typography,
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { BsFolderFill } from "react-icons/bs";
import { AiFillCrown } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";
import { useAppSelector, useAppDispatch } from "@/hooks";
// import Inventory from "./inventory/Inventory";

function ProjectManager() {
  const {
    user: { collaboratingProjects, ownedProjects },
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {}, [collaboratingProjects, ownedProjects]);

  return (
    <Fragment>
      {
        collaboratingProjects.length === 0 && ownedProjects.length === 0 ? (
          <Card className="h-full mx-0 mt-5 mb-6">
            <CardBody className="flex items-center justify-between p-4">
              <Typography variant="h5" color="blue-gray" className="">
                Projects Overview
              </Typography>
              <div>
                <Tabs value="all">
                  <TabsHeader className="w-96">
                    <Tab
                      value="all"
                      className="flex w-full text-base font-medium"
                    >
                      <span className="flex items-center justify-between gap-3">
                        <BsFolderFill />
                        <Typography>All</Typography>
                      </span>
                    </Tab>
                    <Tab value="owned">
                      <span className="flex items-center justify-between gap-3">
                        <AiFillCrown />
                        <Typography>Owned</Typography>
                      </span>
                    </Tab>
                    <Tab value="collaborating">
                      <span className="flex items-center justify-between gap-3">
                        <FaHandshakeSimple />
                        <Typography>Collaborating</Typography>
                      </span>
                    </Tab>
                  </TabsHeader>
                </Tabs>
              </div>
            </CardBody>
          </Card>
        ) : // <Card>
        //   <CardBody>

        //   </CardBody>
        // </Card>
        // <div
        //   className="flex flex-col items-center justify-center h-[500px] gap-2"
        //   onDoubleClick={() =>
        //     dispatch(toggler(ToggleableEnum.AddProjectDialog))
        //   }
        // >
        //   <Typography variant="h3" className="text-gray-400 cursor-default">
        //     No Active Project
        //   </Typography>
        //   <Button
        //     variant="text"
        //     color="blue"
        //     className="flex gap-2 text-gray-400 normal-case"
        //     onClick={() => dispatch(toggler(ToggleableEnum.AddProjectDialog))}
        //   >
        //     <PlusIcon className="h-4 aspect-square" />
        //     Add Project
        //   </Button>
        //   <NewProjectDialog />
        // </div>
        null
        // <Inventory />
      }
    </Fragment>
  );
}

ProjectManager.displayName = "/src/features/projects/ProjectManager.tsx";

export default ProjectManager;
