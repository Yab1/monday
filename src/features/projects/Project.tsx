import { Typography } from "@material-tailwind/react";
import { ProjectSelectorTab } from "@/widgets";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";

function Project() {
  const activeTab = useSelector((state: RootState) => state.tabs.activeTab);
  return (
    <section className="flex flex-col gap-3">
      <Typography variant="h3" className="capitalize">
        {activeTab}
      </Typography>
      <ProjectSelectorTab />
    </section>
  );
}

Project.displayName = "/src/pages/project/project.tsx";

export default Project;
