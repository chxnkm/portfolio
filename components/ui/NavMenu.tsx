'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavMenu() {
  const currentPath = usePathname()

  const menuItems = [
    { href: "/#experience", label: "Experience" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact Me" },
    { href: "/resume/RESUME_KANG_MING.pdf", label: "Résumé", className: "bg-[#bc7b0b] text-white sm:ml-2" },
  ]

  return (
    <div className="relative z-10">
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-row">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="md:my-0 my-1 hover:scale-110 duration-300">
                <Link href={item.href} rel="noopener noreferrer" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      currentPath === item.href ? "underline" : ""
                    } ${item.className || ''}`}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
  )
}