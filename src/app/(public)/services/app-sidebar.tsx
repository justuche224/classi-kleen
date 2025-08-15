"use client";

import * as React from "react";
import Link from "next/link";
import {
  IconCamera,
  IconShoppingCart,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconHelp,
  IconInnerShadowTop,
  IconList,
  IconInfoCircle,
  IconSearch,
  IconSettings,
  IconPhone,
  IconBook,
} from "@tabler/icons-react";

import { NavDocuments } from "../nav-documents";
import { NavMain } from "../nav-main";
import { NavSecondary } from "../nav-secondary";
import { NavUser } from "../nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Shop",
      url: "/shop",
      icon: IconShoppingCart,
    },
    {
      title: "Services",
      url: "/services",
      icon: IconList,
    },
    {
      title: "About",
      url: "#",
      icon: IconInfoCircle,
    },
    {
      title: "Contact",
      url: "#",
      icon: IconPhone,
    },
    {
      title: "Blog",
      url: "#",
      icon: IconBook,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Laundry Pickup Service (Lekki Area)",
      url: "/services/laundry-pickup-service-lekki-area",
      icon: IconDatabase,
    },
    {
      name: "Home/Apartment Cleaning",
      url: "/services/home-apartment-cleaning",
      icon: IconDatabase,
    },
    {
      name: "Home Barbing Services",
      url: "/services/home-barbing-services",
      icon: IconDatabase,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Classi Kleen</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
