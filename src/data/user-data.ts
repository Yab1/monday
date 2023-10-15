import { UserInterface } from "@/interfaces";
import { UserTypeEnum } from "@/enum";

const userData: UserInterface[] = [
  {
    id: "1",
    name: "John Doe",
    profile: "",
    position: "Software Engineer",
    type: UserTypeEnum.Admin,
    isAuthenticated: true,
  },
  {
    id: "2",
    name: "Alice Smith",
    profile: "",
    position: "UX Designer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "3",
    name: "Bob Johnson",
    profile: "",
    position: "Data Analyst",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "4",
    name: "Eve Anderson",
    profile: "",
    position: "Product Manager",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "5",
    name: "Grace Wilson",
    profile: "",
    position: "Marketing Specialist",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "6",
    name: "David Brown",
    profile: "",
    position: "Frontend Developer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "7",
    name: "Liam Taylor",
    profile: "",
    position: "Backend Developer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "8",
    name: "Mia Miller",
    profile: "",
    position: "Graphic Designer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "9",
    name: "Noah Davis",
    profile: "",
    position: "Project Manager",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
  {
    id: "10",
    name: "Olivia Martinez",
    profile: "",
    position: "Data Scientist",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
  },
];

export default userData;
