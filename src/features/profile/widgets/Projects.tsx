import { Typography } from "@material-tailwind/react";
function Projects() {
  return (
    <div className="px-4 pb-4">
      <Typography variant="h6" color="blue-gray" className="mb-2">
        Projects
      </Typography>
      <div className="grid grid-cols-1 gap-12 mt-6 md:grid-cols-2 xl:grid-cols-4"></div>
    </div>
  );
}

Projects.displayName = "/src/features/profile/widgets/Projects.tsx";

export default Projects;
