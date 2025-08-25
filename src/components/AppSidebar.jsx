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
import Colaba from "../assets//coll.svg?react";
import Refresh from "../assets//refresh.svg?react";

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
  const [activeSubItem, setActiveSubItem] = useState(null);

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
  const collapseAll = () => {
    const allClosed = Object.keys(openMenus).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {});
    setOpenMenus(allClosed);
  };

  const opener = () => {
    const allOpened = Object.keys(openMenus).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setOpenMenus(allOpened);
  };
  return (
    <SidebarProvider>
      {/* <col style={{ fill: "#94A3B8" }} className="dan" /> */}
      <Sidebar className="dad">
        <SidebarContent className="second">
          <SidebarGroup>
            <SidebarGroupLabel
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "15px 15px 0 15px",
              }}
            >
              <div>
                <h2 className="app_label">File Explorer</h2>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={opener} // Trigger collapse all on icon click
                  title="Refresh Explorer"
                >
                  <Refresh className="nedda" style={{ fill: "#94a3b8" }} />
                </div>

                <div
                  style={{ cursor: "pointer" }}
                  onClick={collapseAll} // Trigger collapse all on icon click
                  title="Collapse Folders in Explorer"
                >
                  <Colaba className="nedda" style={{ fill: "#94a3b8" }} />
                </div>
              </div>
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
                                borderLeft: "0.5px solid #1c2538",
                                marginLeft: "5px",
                                paddingLeft: "16px",
                                width: "100%", // fill parent width
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                                gap: "6px",
                                paddingTop: "6px",
                              }}
                            >
                              {item.subItems.map((sub) => {
                                const isActive = activeSubItem === sub.title;

                                return (
                                  <SidebarMenuSubItem key={sub.title}>
                                    <a
                                      href={sub.url}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setActiveSubItem(sub.title); // mark as active
                                        handleClick(sub.title);
                                      }}
                                      style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px",
                                        color: isActive
                                          ? "#fff"
                                          : sub.color || "inherit",
                                        backgroundColor: isActive
                                          ? "transparent"
                                          : "transparent",

                                        padding: "1px",
                                        borderRadius: "4px", // optional for rounding corners
                                        transition:
                                          "background-color 0.3s, box-shadow 0.3s", // smooth effect
                                      }}
                                    >
                                      {sub.icon && (
                                        <sub.icon color={sub.color} size={16} />
                                      )}
                                      <h2
                                        className="side_title"
                                        style={{
                                          color: isActive ? "#fff" : "#94a3b8",
                                        }}
                                      >
                                        {sub.title}
                                      </h2>
                                    </a>
                                  </SidebarMenuSubItem>
                                );
                              })}
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
