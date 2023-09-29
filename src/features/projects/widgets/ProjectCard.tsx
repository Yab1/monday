import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Chip,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {
  InformationCircleIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { toggleDialog } from "@/common";

function ProjectCard() {
  const { id, label, status, description } = useAppSelector(
    (state) => state.selectedProject
  );

  const { isEditDialogOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-10 flex items-center">
      <Typography variant="h3" className="capitalize mr-5">
        {label}
      </Typography>

      <Tooltip
        placement="bottom"
        className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
        content={
          <Typography variant="small" color="blue-gray">
            {description}
          </Typography>
        }
      >
        <Button variant="text" className="p-0">
          <InformationCircleIcon className="w-5 aspect-square" />
        </Button>
      </Tooltip>

      <div className="flex gap-3 ml-auto mr-5">
        <Chip
          color="green"
          value={status}
          className="p-1 px-2 text-xs font-body capitalize"
        />

        <Menu>
          <MenuHandler>
            <Button variant="text" className="p-0">
              <EllipsisHorizontalIcon className="w-6 aspect-square" />
            </Button>
          </MenuHandler>
          <MenuList>
            <MenuItem
              className="flex items-center gap-2"
              onClick={() => dispatch(toggleDialog("isEditDialogOpen"))}
            >
              <PencilIcon className="w-4 aspect-square" />
              <Typography variant="small" className="font-normal">
                Edit Project
              </Typography>
            </MenuItem>
            <MenuItem className="flex items-center gap-2">
              <TrashIcon className="w-4 aspect-square" />
              <Typography variant="small" className="font-normal">
                Delete Project
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}

ProjectCard.displayName = "/src/features/projects/widgets/ProjectCard.tsx";

export default ProjectCard;
