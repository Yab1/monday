import { Fragment } from "react";
import { Card } from "@material-tailwind/react";
import { Header } from "./header";
import { Body } from "./body";
import { useAppSelector } from "@/hooks";
import AddGroup from "./atoms/AddGroup";

function Content() {
  const { groups } = useAppSelector((state) => state.selectedProject);

  return (
    <Fragment>
      <AddGroup />
      {groups.map((group) => {
        return (
          <Card key={group.id} className="w-full mb-2">
            <Header group={group} />
            <Body group={group} />
          </Card>
        );
      })}
    </Fragment>
  );
}

Content.displayName = "/src/features/projects/content/Content.tsx";

export default Content;
