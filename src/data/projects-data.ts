import { Project } from "@/interfaces";

const initialState: Project[] = [
  {
    id: "1",
    label: "Website Redesign",
    status: "In Progress",
    description: "Redesign the company website for a modern look.",
    groups: [
      {
        id: "1",
        groupName: "Design Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "1",
            title: "Create Wireframes",
            assignedTeamMembers: ["Alice", "Bob"],
            dueDate: "2023-09-30",
            status: "Pending",
          },
          {
            id: "2",
            title: "Choose Color Palette",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-09-28",
            status: "Completed",
          },
          {
            id: "3",
            title: "Select Fonts",
            assignedTeamMembers: ["Charlie", "David"],
            dueDate: "2023-10-05",
            status: "Ready for Review",
          },
        ],
      },
      {
        id: "2",
        groupName: "Development Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "4",
            title: "Implement Responsive Layout",
            assignedTeamMembers: ["Alice", "Charlie"],
            dueDate: "2023-10-10",
            status: "Pending",
          },
          {
            id: "5",
            title: "Backend Integration",
            assignedTeamMembers: ["Bob", "David"],
            dueDate: "2023-10-15",
            status: "Pending",
          },
        ],
      },
      {
        id: "3",
        groupName: "Testing Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "6",
            title: "User Testing",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-10-20",
            status: "Pending",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    label: "Marketing Campaign",
    status: "Completed",
    description: "Launch a new marketing campaign to promote products.",
    groups: [
      {
        id: "4",
        groupName: "Planning",
        isCollapsed: false,
        tasks: [
          {
            id: "7",
            title: "Market Research",
            assignedTeamMembers: ["Grace", "Hank"],
            dueDate: "2023-09-25",
            status: "Completed",
          },
          {
            id: "8",
            title: "Campaign Strategy",
            assignedTeamMembers: ["Isabel", "Jack"],
            dueDate: "2023-10-01",
            status: "Completed",
          },
        ],
      },
      {
        id: "5",
        groupName: "Execution",
        isCollapsed: false,
        tasks: [
          {
            id: "9",
            title: "Create Advertisements",
            assignedTeamMembers: ["Liam", "Mia"],
            dueDate: "2023-10-10",
            status: "Completed",
          },
        ],
      },
      {
        id: "6",
        groupName: "Analysis",
        isCollapsed: false,
        tasks: [
          {
            id: "10",
            title: "ROI Analysis",
            assignedTeamMembers: ["Noah"],
            dueDate: "2023-10-25",
            status: "Pending",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    label: "Product Development",
    status: "Pending",
    description: "Develop a new software product for the market.",
    groups: [
      {
        id: "1",
        groupName: "Design Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "1",
            title: "Create Wireframes",
            assignedTeamMembers: ["Alice", "Bob"],
            dueDate: "2023-09-30",
            status: "Pending",
          },
          {
            id: "2",
            title: "Choose Color Palette",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-09-28",
            status: "Completed",
          },
          {
            id: "3",
            title: "Select Fonts",
            assignedTeamMembers: ["Charlie", "David"],
            dueDate: "2023-10-05",
            status: "Ready for Review",
          },
        ],
      },
      {
        id: "2",
        groupName: "Development Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "4",
            title: "Implement Responsive Layout",
            assignedTeamMembers: ["Alice", "Charlie"],
            dueDate: "2023-10-10",
            status: "Pending",
          },
          {
            id: "5",
            title: "Backend Integration",
            assignedTeamMembers: ["Bob", "David"],
            dueDate: "2023-10-15",
            status: "Pending",
          },
        ],
      },
      {
        id: "3",
        groupName: "Testing Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "6",
            title: "User Testing",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-10-20",
            status: "Pending",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    label: "Event Planning",
    status: "Completed",
    description: "Organize and manage a corporate event.",
    groups: [
      {
        id: "1",
        groupName: "Design Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "1",
            title: "Create Wireframes",
            assignedTeamMembers: ["Alice", "Bob"],
            dueDate: "2023-09-30",
            status: "Pending",
          },
          {
            id: "2",
            title: "Choose Color Palette",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-09-28",
            status: "Completed",
          },
          {
            id: "3",
            title: "Select Fonts",
            assignedTeamMembers: ["Charlie", "David"],
            dueDate: "2023-10-05",
            status: "Ready for Review",
          },
        ],
      },
      {
        id: "2",
        groupName: "Development Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "4",
            title: "Implement Responsive Layout",
            assignedTeamMembers: ["Alice", "Charlie"],
            dueDate: "2023-10-10",
            status: "Pending",
          },
          {
            id: "5",
            title: "Backend Integration",
            assignedTeamMembers: ["Bob", "David"],
            dueDate: "2023-10-15",
            status: "Pending",
          },
        ],
      },
      {
        id: "3",
        groupName: "Testing Phase",
        isCollapsed: false,
        tasks: [
          {
            id: "6",
            title: "User Testing",
            assignedTeamMembers: ["Eve"],
            dueDate: "2023-10-20",
            status: "Pending",
          },
        ],
      },
    ],
  },
];

export default initialState;
