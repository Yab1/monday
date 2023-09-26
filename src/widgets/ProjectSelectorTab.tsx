import { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ProjectDetailsTable } from "@/widgets";
import { useSelector, useDispatch } from "react-redux";
import { switchTab } from "@/common";
import { RootState } from "@/redux";

function ProjectSelectorTab() {
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab);
  const projects = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {projects.map(({ id, label }) => (
          <Tab
            key={id}
            value={label}
            onClick={() => dispatch(switchTab(label))}
            className={`w-fit px-8 py-3 ${
              activeTab === label ? "text-gray-900" : ""
            }`}
          >
            {label}
          </Tab>
        ))}
        <Button className="px-8 py-3 w-fit" variant="text">
          <PlusIcon className="h-5 aspect-square" />
        </Button>
      </TabsHeader>
      <TabsBody>
        {projects.map(({ label }) => (
          <TabPanel key={label} value={label}>
            <ProjectDetailsTable />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

ProjectSelectorTab.displayName = "/src/widgets/Tabs.tsx";

export default ProjectSelectorTab;
