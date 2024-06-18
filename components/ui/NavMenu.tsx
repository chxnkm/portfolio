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

  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/about-me" passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                currentPath === "/about-me" ? "bg-slate-300 underline" : ""
              }`}
            >
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/projects" passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                currentPath === "/projects" ? "bg-slate-300 underline" : ""
              }`}
            >
              Projects
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/hobbies" passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                currentPath === "/hobbies" ? "bg-slate-300 underline" : ""
              }`}
            >
              Hobbies
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/resume/RESUME_KANG_MING.pdf" passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} ${
                currentPath === "/resume/RESUME_KANG_MING.pdf"
                  ? "bg-slate-300 underline"
                  : ""
              }`}
            >
              Résumé
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}