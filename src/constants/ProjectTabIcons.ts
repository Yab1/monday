import { ProjectFilterStatesEnum } from "@/enum";
import { BsFolderFill } from "react-icons/bs";
import { AiFillCrown } from "react-icons/ai";
import { FaHandshakeSimple } from "react-icons/fa6";

const ProjectTabIcons = {
  [ProjectFilterStatesEnum.ALL]: BsFolderFill,
  [ProjectFilterStatesEnum.OWNED]: AiFillCrown,
  [ProjectFilterStatesEnum.COLLABORATING]: FaHandshakeSimple,
};

export default ProjectTabIcons;
