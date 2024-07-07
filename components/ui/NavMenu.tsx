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

export function NavMenu() {
  const currentPath = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    { href: "/#projects", label: "Projects" },
    { href: "/hobbies", label: "Hobbies" },
    { href: "/contact", label: "Contact Me" },
    { href: "/resume/RESUME_KANG_MING.pdf", label: "Résumé", className: "bg-[#bc7b0b] text-white" },
  ]

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="relative z-10">
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu />
      </button>
      <div className={`
        md:block
        absolute md:relative
        top-full right-0
        md:top-auto md:right-auto
        bg-[#ededed]
        shadow-md md:shadow-none
        rounded-md
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}
      `}>
        <NavigationMenu className="w-full">
          <NavigationMenuList className="flex flex-col md:flex-row">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index} className="md:my-0 my-1">
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      currentPath === item.href ? "underline" : ""
                    } ${item.className || ''} text-sm`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}