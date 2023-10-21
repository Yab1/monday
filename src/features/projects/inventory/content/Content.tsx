import { Fragment } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Header } from "./header";
import { Body } from "./body";
import { useAppSelector } from "@/hooks";
import AddGroup from "./atoms/AddGroup";

function Content() {
  const { groups } = useAppSelector((state) => state.selectedProject);

  return (
    <Fragment>
      <AddGroup />
      {groups.length === 0 ? (
        <div className="grid h-40 place-items-center ">
          <Typography variant="h3" className="text-gray-400 cursor-default">
            No Group Available
          </Typography>
        </div>
      ) : (
        groups.map((group) => {
          return (
            <Card key={group.id} className="w-full mb-2">
              <Header group={group} />
              <Body group={group} />
            </Card>
          );
        })
      )}
    </Fragment>
  );
}

Content.displayName = "/src/features/projects/content/Content.tsx";

export default Content;
