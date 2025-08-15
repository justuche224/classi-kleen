"use client";

import * as React from "react";
import Link from "next/link";
import {
  IconCamera,
  IconShoppingCart,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconHelp,
  IconInnerShadowTop,
  IconReport,
  IconSearch,
  IconSettings,
  IconList,
  IconInfoCircle,
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
      name: "Cleansers & Toners",
      url: "/shop/cleansers-toners",
      icon: IconDatabase,
    },
    {
      name: "Serums & Treatments",
      url: "/shop/serums-treatments",
      icon: IconReport,
    },
    {
      name: "Makeup",
      url: "/shop/makeup",
      icon: IconFileWord,
    },
    {
      name: "Perfumes & Fragrances",
      url: "/shop/perfumes-fragrances",
      icon: IconFileWord,
    },
    {
      name: "Moisturizers & Creams",
      url: "/shop/moisturizers-creams",
      icon: IconFileWord,
    },
    {
      name: "Tools & Accessories",
      url: "/shop/tools-accessories",
      icon: IconFileWord,
    },
    {
      name: "Scrubs & Exfoliants",
      url: "/shop/scrubs-exfoliants",
      icon: IconFileWord,
    },
    {
      name: "Specialized Products",
      url: "/shop/specialized-products",
      icon: IconFileWord,
    },
    {
      name: "Oils & Butters",
      url: "/shop/oils-butters",
      icon: IconFileWord,
    },
    {
      name: "Body Wash & Soaps",
      url: "/shop/body-wash-soaps",
      icon: IconFileWord,
    },
    {
      name: "Hygiene",
      url: "/shop/hygiene",
      icon: IconFileWord,
    },
    {
      name: "Shampoo & Conditioner",
      url: "/shop/shampoo-conditioner",
      icon: IconFileWord,
    },
    {
      name: "Hair Oils & Treatments",
      url: "/shop/hair-oils-treatments",
      icon: IconFileWord,
    },
    {
      name: "Styling Products",
      url: "/shop/styling-products",
      icon: IconFileWord,
    },
    {
      name: "Hair Color & Dye",
      url: "/shop/hair-color-dye",
      icon: IconFileWord,
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
