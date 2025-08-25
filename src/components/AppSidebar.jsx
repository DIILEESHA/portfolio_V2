// AppSidebar.jsx
import { ChevronDown } from "lucide-react";
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
import Colaba from "../assets/coll.svg?react";
import Refresh from "../assets/refresh.svg?react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { useState } from "react";

function RecursiveMenu({
  items,
  onSelectItem,
  activeSubItem,
  setActiveSubItem,
  openMenus,
  toggleMenu,
}) {
  return (
    <>
      {items.map((item) => {
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isOpen = !!openMenus[item.title];

        const handleClick = (title) => {
          if (onSelectItem) {
            onSelectItem(title.replace(".json", ""));
          }
        };

        return (
          <SidebarMenuItem
            key={item.title}
            className="vv"
            style={{
              paddingLeft: "12px",
              cursor: hasSubItems ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {hasSubItems ? (
              <Collapsible
                open={isOpen}
                onOpenChange={() => toggleMenu(item.title)}
                className="group/collapsible "
              >
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
                        transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
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

                {isOpen && (
                  <CollapsibleContent>
                    <SidebarMenuSub
                      style={{
                        borderLeft: "0.5px solid #1c2538",
                        marginLeft: "5px",
                        paddingLeft: "10px",
                        width: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0px",
                        // paddingTop: "6px",
                      }}
                    >
                      <RecursiveMenu
                        items={item.subItems}
                        onSelectItem={onSelectItem}
                        activeSubItem={activeSubItem}
                        setActiveSubItem={setActiveSubItem}
                        openMenus={openMenus}
                        toggleMenu={toggleMenu}
                      />
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </Collapsible>
            ) : (
              <SidebarMenuButton asChild>
                <a
                  href={item.url}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSubItem(item.title);
                    handleClick(item.title);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color:
                      activeSubItem === item.title
                        ? "#fff"
                        : item.color || "inherit",
                    backgroundColor: "transparent",
                    padding: "1px",
                    borderRadius: "4px",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                  }}
                >
                  {item.icon && <item.icon color={item.color} size={16} />}
                  <h2
                    className="side_title"
                    style={{
                      color: activeSubItem === item.title ? "#fff" : "#94a3b8",
                    }}
                  >
                    {item.title}
                  </h2>
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        );
      })}
    </>
  );
}

function getAllOpenKeys(items) {
  const keys = {};
  items.forEach((item) => {
    if (item.subItems && item.subItems.length > 0) {
      keys[item.title] = true;
      Object.assign(keys, getAllOpenKeys(item.subItems));
    }
  });
  return keys;
}

export function AppSidebar({ items, onSelectItem }) {
  const [activeSubItem, setActiveSubItem] = useState(null);
  const [openMenus, setOpenMenus] = useState(getAllOpenKeys(items));

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
      <Sidebar className="dad">
        <SidebarContent>
          <div className="second">
            <SidebarGroup>
              <div className="tops">
                <SidebarGroupLabel
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: "0",
                    background: "020817",
                    zIndex: "1000",
                    width: "100%",
                    padding: "15px 10px 0 18px",
                  }}
                >
                  <div>
                    <h2 className="app_label">File Explorer</h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={opener}
                      title="Refresh Explorer"
                    >
                      <Refresh className="nedda" style={{ fill: "#94a3b8" }} />
                    </div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={collapseAll}
                      title="Collapse Folders in Explorer"
                    >
                      <Colaba className="nedda" style={{ fill: "#94a3b8" }} />
                    </div>
                  </div>
                </SidebarGroupLabel>
                <div className="lino"></div>
              </div>

              <SidebarGroupContent className="sxa">
                <SidebarMenu>
                  <RecursiveMenu
                    items={items}
                    onSelectItem={onSelectItem}
                    activeSubItem={activeSubItem}
                    setActiveSubItem={setActiveSubItem}
                    openMenus={openMenus}
                    toggleMenu={toggleMenu}
                  />
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
