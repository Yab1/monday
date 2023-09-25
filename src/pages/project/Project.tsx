import { useState } from "react";
import {
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ProjectDetailsTable } from "@/widgets";

function Project() {
  const [activeTab, setActiveTab] = useState("project 1");
  const data = [
    {
      label: "Project 1",
      value: "project 1",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Project 2",
      value: "project 2",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Project 3",
      value: "project 3",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
  ];
  return (
    <section className="flex flex-col gap-3">
      <Typography variant="h3" className="capitalize">
        {activeTab}
      </Typography>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={`w-fit px-8 py-3 ${
                activeTab === value ? "text-gray-900" : ""
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
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              <ProjectDetailsTable />
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
}

Project.displayName = "/src/pages/project/project.tsx";

export default Project;
