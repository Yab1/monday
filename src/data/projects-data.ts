import { v4 as uuidv4 } from "uuid";
import { Project } from "@/interfaces";
import { StatusEnum } from "@/enum";

const initialState: Project[] = [
  {
    id: uuidv4(),
    label: "Website Redesign",
    status: StatusEnum["In Progress"],
    description: "Redesign the company website for a modern look.",
    groups: [
      {
        id: uuidv4(),
        groupName: "Design Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Create Wireframes",
            assignedTeamMembers: ["Alice", "Bob"],
            dueDate: "2023-09-30",
            status: StatusEnum.Pending,
          },
          {
            id: uuidv4(),
            title: "Choose Color Palette",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-09-28",
            status: StatusEnum.Completed,
          },
          {
            id: uuidv4(),
            title: "Select Fonts",
            assignedTeamMembers: ["Charlie", "David"],
            dueDate: "2023-10-05",
            status: StatusEnum["Ready for Review"],
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Development Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Implement Responsive Layout",
            assignedTeamMembers: ["Alice", "Charlie"],
            dueDate: "2023-10-10",
            status: StatusEnum.Pending,
          },
          {
            id: uuidv4(),
            title: "Backend Integration",
            assignedTeamMembers: ["Bob", "David"],
            dueDate: "2023-10-15",
            status: StatusEnum.Pending,
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Testing Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "User Testing",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-10-20",
            status: StatusEnum.Pending,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    label: "Marketing Campaign",
    status: StatusEnum.Completed,
    description: "Launch a new marketing campaign to promote products.",
    groups: [
      {
        id: uuidv4(),
        groupName: "Planning",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Market Research",
            assignedTeamMembers: ["Grace", "Hank"],
            dueDate: "2023-09-25",
            status: StatusEnum.Completed,
          },
          {
            id: uuidv4(),
            title: "Campaign Strategy",
            assignedTeamMembers: ["Isabel", "Jack"],
            dueDate: "2023-10-01",
            status: StatusEnum.Completed,
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Execution",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Create Advertisements",
            assignedTeamMembers: ["Liam", "Mia"],
            dueDate: "2023-10-10",
            status: StatusEnum.Completed,
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Analysis",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "ROI Analysis",
            assignedTeamMembers: ["Noah"],
            dueDate: "2023-10-25",
            status: StatusEnum.Pending,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    label: "Product Development",
    status: StatusEnum.Pending,
    description: "Develop a new software product for the market.",
    groups: [
      {
        id: uuidv4(),
        groupName: "Design Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Create Wireframes",
            assignedTeamMembers: ["Alice", "Bob"],
            dueDate: "2023-09-30",
            status: StatusEnum.Pending,
          },
          {
            id: uuidv4(),
            title: "Choose Color Palette",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-09-28",
            status: StatusEnum.Completed,
          },
          {
            id: uuidv4(),
            title: "Select Fonts",
            assignedTeamMembers: ["Charlie", "David"],
            dueDate: "2023-10-05",
            status: StatusEnum["Ready for Review"],
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Development Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Implement Responsive Layout",
            assignedTeamMembers: ["Alice", "Charlie"],
            dueDate: "2023-10-10",
            status: StatusEnum.Pending,
          },
          {
            id: uuidv4(),
            title: "Backend Integration",
            assignedTeamMembers: ["Bob", "David"],
            dueDate: "2023-10-15",
            status: StatusEnum.Pending,
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Testing Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "User Testing",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-10-20",
            status: StatusEnum.Pending,
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    label: "Event Planning",
    status: StatusEnum.Completed,
    description: "Organize and manage a corporate event.",
    groups: [
      {
        id: uuidv4(),
        groupName: "Design Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Create Wireframes",
            assignedTeamMembers: ["Alice", "Bob"],
            dueDate: "2023-09-30",
            status: StatusEnum.Pending,
          },
          {
            id: uuidv4(),
            title: "Choose Color Palette",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-09-28",
            status: StatusEnum.Completed,
          },
          {
            id: uuidv4(),
            title: "Select Fonts",
            assignedTeamMembers: ["Charlie", "David"],
            dueDate: "2023-10-05",
            status: StatusEnum["Ready for Review"],
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Development Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "Implement Responsive Layout",
            assignedTeamMembers: ["Alice", "Charlie"],
            dueDate: "2023-10-10",
            status: StatusEnum.Pending,
          },
          {
            id: uuidv4(),
            title: "Backend Integration",
            assignedTeamMembers: ["Bob", "David"],
            dueDate: "2023-10-15",
            status: StatusEnum.Pending,
          },
        ],
      },
      {
        id: uuidv4(),
        groupName: "Testing Phase",
        isCollapsed: false,
        tasks: [
          {
            id: uuidv4(),
            title: "User Testing",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-10-20",
            status: StatusEnum.Pending,
          },
        ],
      },
    ],
  },
];

export default initialState;
