import { Breadcrumbs, Typography } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

function PageIndicator() {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <div className="capitalize">
      <Breadcrumbs className="p-0 bg-transparent">
        <Link to={`/${layout}`}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal transition-all opacity-50 hover:text-blue-500 hover:opacity-100"
          >
            {layout}
          </Typography>
        </Link>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {page}
        </Typography>
      </Breadcrumbs>
      <Typography variant="h6" color="blue-gray">
        {page}
      </Typography>
    </div>
  );
}

PageIndicator.displayName = "/src/features/dashboard/layouts/navbar/widgets/PageIndicator.tsx";

export default PageIndicator;
