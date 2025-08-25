// sidebarConfig.js
import {
  User,
  BriefcaseBusiness,
  FolderKanban,
  Heart,
  GraduationCap,
  Code,
  Server,
} from "lucide-react";

export const aboutSidebarItems = [
  {
    title: "_about-me",
    icon: User,
    color: "#a855f7",
    subItems: [
      {
        title: "personal-info",
        icon: User,
        color: "#a855f7",
        subItems: [
          { title: "bio.json", icon: User, color: "#a855f7" },
          { title: "experience.json", icon: BriefcaseBusiness, color: "#60a5fa" },
          { title: "projects.json", icon: FolderKanban, color: "#ffbd2e" },
          { title: "interest.json", icon: Heart, color: "#94a3b8" },
          { title: "education.json", icon: GraduationCap, color: "#00d5be" },
        ],
      },
      {
        title: "tech-stack",
        icon: Code,
        color: "#60a5fa",
        subItems: [
          { title: "frontend.json", icon: Code, color: "#c084fc" },
          { title: "backend.json", icon: Server, color: "pink" },
          { title: "others.json", icon: User, color: "#a855f7" },
        ],
      },
    ],
  },
];
