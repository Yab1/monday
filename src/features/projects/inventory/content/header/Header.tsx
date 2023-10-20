import { Fragment } from "react";
import { EditMode, ViewMode } from "./index";
import { Group } from "@/interfaces";
import { useAppSelector } from "@/hooks";

function Header({ group }: { group: Group }) {
  const {
    editing: { id, isEditing },
  } = useAppSelector((state) => state.ui);

  return (
    <Fragment>
      {isEditing && group.id === id ? (
        <EditMode group={group} />
      ) : (
        <ViewMode group={group} />
      )}
    </Fragment>
  );
}

Header.displayName = "/src/features/projects/content/header/Header.tsx";

export default Header;
