import { UserInterface } from "@/interfaces";
import { UserTypeEnum } from "@/enum";

const userData: UserInterface[] = [
  {
    id: "1",
    name: "Yeabsera Lisanework",
    profile:
      "https://media.licdn.com/dms/image/D5603AQHlyfMGnKvIPA/profile-displayphoto-shrink_200_200/0/1693337536934?e=1703116800&v=beta&t=VCnGeR2CMoyMLURj3UYZq0jTJY6jpWvnxtAh1ZRz6ms",
    position: "Software Engineer",
    type: UserTypeEnum.Admin,
    isAuthenticated: true,
    isOnline: true,
  },
  {
    id: "2",
    name: "Alice Smith",
    profile:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    position: "UX Designer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: true,
  },
  {
    id: "3",
    name: "Bob Johnson",
    profile:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    position: "Data Analyst",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: false,
  },
  {
    id: "4",
    name: "Eve Anderson",
    profile:
      "https://images.unsplash.com/photo-1524154217857-45f012d0f167?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    position: "Product Manager",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: false,
  },
  {
    id: "5",
    name: "Grace Wilson",
    profile:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    position: "Marketing Specialist",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: true,
  },
  {
    id: "6",
    name: "David Brown",
    profile:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?auto=format&fit=crop&q=60&w=400&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    position: "Frontend Developer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: true,
  },
  {
    id: "7",
    name: "Liam Taylor",
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
    position: "Backend Developer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: true,
  },
  {
    id: "8",
    name: "Mia Miller",
    profile:
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=",
    position: "Graphic Designer",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: true,
  },
  {
    id: "9",
    name: "Noah Davis",
    profile:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    position: "Project Manager",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: false,
  },
  {
    id: "10",
    name: "Olivia Martinez",
    profile:
      "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?b=1&s=170667a&w=0&k=20&c=--Ei0owZ8KqwVppB5o0bMRG4aNV8VA0HHnsH1YfuxAw=",
    position: "Data Scientist",
    type: UserTypeEnum.Regular,
    isAuthenticated: true,
    isOnline: true,
  },
];

export default userData;
