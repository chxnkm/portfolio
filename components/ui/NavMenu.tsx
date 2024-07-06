'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavMenu() {
  const currentPath = usePathname()

  const menuItems = [
    { href: "/#projects", label: "Projects" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact Me" },
    { href: "/resume/RESUME_KANG_MING.pdf", label: "Résumé", className: "bg-[#bc7b0b] text-white" },
  ]

  const NavItems = ({ mobile = false }) => (
    <>
      {menuItems.map((item) => {
        if (mobile) {
          return (
            <DropdownMenuItem key={item.href} asChild>
              <a href={item.href}>{item.label}</a>
            </DropdownMenuItem>
          )
        }
        return (
          <NavigationMenuItem key={item.href}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${
                  currentPath === item.href ? "bg-[#f3a616] underline" : ""
                } ${item.className || ""}`}
              >
                {item.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )
      })}
    </>
  )

  return (
    <>
      {/* Desktop Navigation */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavItems />
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <NavItems mobile />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}