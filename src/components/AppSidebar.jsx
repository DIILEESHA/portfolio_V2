import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Code,
  User,
  ChevronDown,
  BriefcaseBusiness,
  FolderKanban,
  Heart,
  GraduationCap,
  Server,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { useState } from "react";
import { color } from "framer-motion";

// Menu items with sub-items
const items = [
  {
    title: "personal-info",
    icon: User,
    color: "#a855f7",
    subItems: [
      { title: "bio.json", icon: User, color: "#a855f7" },
      {
        title: "experience.json",
        icon: BriefcaseBusiness,
        color: "#60a5fa",
      },
      {
        title: "projects.json",
        icon: FolderKanban,
        color: "#ffbd2e",
      },
      {
        title: "interest.json",
        icon: Heart,
        color: "#94a3b8",
      },

      {
        title: "education.json",
        icon: GraduationCap,
        color: "#00d5be",
      },
    ],
  },

  {
    title: "tech-stack",
    color: "#60a5fa",
    url: "#",
    icon: Code,
    subItems: [
      {
        title: "frontend.json",
        url: "#messages",
        icon: Code,
        color: "#c084fc",
      },
      { title: "backend.json", url: "#messages", icon: Server, color: "pink" },
      { title: "others.json", url: "#messages", icon: User, color: "#a855f7" },
    ],
  },
];

export function AppSidebar({ onSelectItem }) {
  const [openMenus, setOpenMenus] = useState(
    items.reduce((acc, item) => {
      if (item.subItems) acc[item.title] = true;
      return acc;
    }, {})
  );
  const handleClick = (title) => {
    if (onSelectItem) {
      onSelectItem(title.replace(".json", ""));
    }
  };
  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <SidebarProvider>
      <Sidebar className="dad">
        <SidebarContent className="second">
          <SidebarGroup>
            <SidebarGroupLabel className="">
              <h2 className="app_label">File Explorer</h2>
            </SidebarGroupLabel>

            <div className="lino"></div>
            <SidebarGroupContent className="boho">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="vv"
                    style={{
                      paddingLeft: "12px",
                      cursor: item.subItems ? "pointer" : "default",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    {item.subItems ? (
                      <Collapsible
                        open={openMenus[item.title]}
                        onOpenChange={() => toggleMenu(item.title)}
                        className="group/collapsible "
                      >
                        {/* Menu Button with arrow on left */}
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton
                            className="SidebarMenuButton"
                            style={{
                              display: "flex",
                              alignItems: "center",

                              gap: "8px",
                            }}
                          >
                            <ChevronDown
                              size={20}
                              style={{
                                cursor: "pointer",
                                transition: "transform 0.3s",
                                color: "#94a3b8",
                                transform: openMenus[item.title]
                                  ? "rotate(0deg)"
                                  : "rotate(-90deg)",
                                marginRight: 4,
                              }}
                            />
                            <item.icon
                              size={17}
                              color={item.color ? item.color : undefined}
                            />

                            <h2 className="side_title">{item.title}</h2>
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        {/* Sub menu with left border line */}
                        {openMenus[item.title] && (
                          <CollapsibleContent>
                            <SidebarMenuSub
                              style={{
                                borderLeft: "0.5px solid #1c2538", // White border line
                                marginLeft: "5px", // indent submenu after arrow
                                paddingLeft: "16px", // space between border and items
                                display: "flex",
                                gap: "10px",
                                paddingTop: "6px",
                              }}
                            >
                              {item.subItems.map((sub) => (
                                <SidebarMenuSubItem key={sub.title}>
                                  <a
                                    href={sub.url}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                      color: sub.color || "inherit",
                                      paddingLeft: "5px",
                                    }}
                                  >
                                    {/* Render icon with color if present */}
                                    {sub.icon && (
                                      <sub.icon
                                        color={sub.color || undefined}
                                        size={16}
                                        // style={{paddingLeft:"-6px"}}
                                      />
                                    )}
                                    <h2
                                      style={{ color: "#94a3b8" }}
                                      className="side_title"
                                      onClick={(e) => {
                                        e.preventDefault(); // prevent page reload
                                        handleClick(sub.title);
                                      }}
                                    >
                                      {sub.title}
                                    </h2>
                                  </a>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        )}
                      </Collapsible>
                    ) : (
                      <SidebarMenuButton asChild>
                        <a
                          href={item.url}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
